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

import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
