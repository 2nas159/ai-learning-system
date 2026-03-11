import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

export const createSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: async (url, options = {}) => {
          let clerkToken = null;
          try {
            clerkToken = await (await auth()).getToken({
              template: "supabase",
            });
          } catch (error: unknown) {
            console.error(
              "[Supabase Client] Failed to get Clerk token. Make sure you have created a JWT template named 'supabase' in your Clerk Dashboard. Error:",
              (error as Error).message
            );
          }

          const headers = new Headers(options.headers);
          if (clerkToken) {
            headers.set("Authorization", `Bearer ${clerkToken}`);
          }

          const res = await fetch(url, {
            ...options,
            headers,
          });
          return res;
        },
      },
    },
  );
};
