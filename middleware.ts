if (process.env.NODE_ENV === 'development' && typeof globalThis !== 'undefined') {
  try {
    const mockStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0,
      key: () => null,
    };
    
    if (!globalThis.localStorage || typeof globalThis.localStorage.getItem !== 'function') {
      // Try direct assignment first
      try {
        (globalThis as any).localStorage = mockStorage;
      } catch (e) {
        // Fallback to defineProperty
        Object.defineProperty(globalThis, 'localStorage', {
          value: mockStorage,
          writable: true,
          configurable: true
        });
      }
    }
  } catch (e) {
    // Ignore errors in strict frozen environments
  }
}

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
