import { auth } from "@clerk/nextjs/server";
import { getAllCompanions } from "@/lib/actions/companion.actions";

export default async function TestPage() {
  try {
    const { userId } = await auth();
    console.log("Testing getAllCompanions...");
    const companions = await getAllCompanions({ limit: 1 });
    return (
      <div>
        <h1>Test Auth & Supabase</h1>
        <p>User ID: {userId || "Not logged in"}</p>
        <p>Companions count: {companions ? companions.length : 0}</p>
      </div>
    );
  } catch (error: any) {
    console.error("Error in TestPage:", error);
    return (
      <div>
        <h1>Error in TestPage</h1>
        <pre style={{ color: "red" }}>{error.message}</pre>
        <pre>{error.stack}</pre>
      </div>
    );
  }
}
