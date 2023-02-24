import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();

  const getManagementToken = async () => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "4Et9Nb4mNzyeh2oGTSZwGt7GpGuEcKNS",
        client_secret:
          "Li1hkCrdKIDrLHZzf-gzdc4Hs84lb7eY7jBBi3Q5B8RvzhD04t_sSzpifZYNch--",
        audience: "https://dev-e58xjmdiyxj32pdx.us.auth0.com/api/v2/",
      }),
    };

    const response = await fetch(
      "https://dev-e58xjmdiyxj32pdx.us.auth0.com/oauth/token",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          return data.access_token;
        }
      })
      .catch((error) => console.error(error));
    return response;
  };

  const registerUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mgmToken = (await getManagementToken()) || "";
    console.log("Management token!", mgmToken);
    console.log("Domain is", process.env.NEXT_PUBLIC_AUTH0_DOMAIN);
    const apiUrl = `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/users`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mgmToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        connection: "Username-Password-Authentication",
      }),
    });
    console.log("Login response!", response);
    console.log("Login response status!", response.status);
    console.log("Login response body!", await response.json());
    return response;
  };

  if (session) {
    return (
      <div>
        <p>You are already signed in.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={(e) => registerUser(e)}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupPage;
