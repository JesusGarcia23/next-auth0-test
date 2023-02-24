import { getSession } from "next-auth/react";

export default function ProtectedPage({ user }: any) {
  return (
    <>
      <h1>Protected Page</h1>
      <p>Welcome, {user.name}!</p>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
