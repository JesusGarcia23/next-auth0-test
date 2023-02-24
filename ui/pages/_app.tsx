import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "../context/userContext";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
}
