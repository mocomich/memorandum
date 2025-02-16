import type { DefaultSession } from 'next-auth';
declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email?: string | null;
      image?: string | null;
    };
  }
}
