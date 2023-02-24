import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const testApiCall = async () => {
    console.log("Data", session);
    const response = await fetch("/api/hello", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    })
      .then(async (res) => {
        if (res.ok) {
          return await res.json();
        }
      })
      .catch((err) => {
        console.log("Err!", err);
      });

    console.log("Response was", response);
  };

  const handleSignOut = async () => {
    // await fetch("/api/auth/signout");
    const URL = "https://dev-e58xjmdiyxj32pdx.us.auth0.com/v2/logout?";

    // const response = await fetch(
    //   URL +
    //     new URLSearchParams({
    //       client_id: "4Et9Nb4mNzyeh2oGTSZwGt7GpGuEcKNS",
    //       returnTo: "http://localhost:3000/",
    //     }),
    //   { method: "GET" }
    // );
    // if (response.status === 302) {
    //   console.log("Response!", response);
    // }
    await signOut({
      callbackUrl: "http://localhost:3000/",
      redirect: false,
    }).then(() => {
      console.log("HAHHAHAHA");
      // https://dev-e58xjmdiyxj32pdx.us.auth0.com/v2/logout
      return (window.location.href =
        "https://dev-e58xjmdiyxj32pdx.us.auth0.com/v2/logout");
    });
  };

  return (
    <>
      <main className={styles.main}>
        <div>
          <h1>Hello World</h1>
          <Link href="/login">login</Link>
          <Link href="/signup">Sign up</Link>
        </div>
        <div>
          <button onClick={() => testApiCall()}>Test API</button>
        </div>
        {session && (
          <>
            Signed in as {session?.user?.email} <br />
            <img
              alt={"user-picture"}
              src={session?.user?.image || ""}
              width={150}
              height={150}
            />
            <button onClick={() => handleSignOut()}>Sign out</button>
          </>
        )}
      </main>
    </>
  );
}
