import { FC, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello World!", email, password);
    const response = await signIn(
      "auth0",
      {
        email,
        password,
        callbackUrl: "http://localhost:3000",
        redirect: false,
        idToken: true,
      },
      {
        audience: "http://localhost:5000",
        scope: "openid email profile",
        response_type: "code",
        code_challenge_method: "S256",
        redirect_uri: "http://localhost:3000/api/auth/callback/auth0",
      }
    ).then((res) => {
      console.log("Response lmao!", res);
    });

    console.log("Response! ", response);
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={loginHandler}>
        <input
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          name="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={"password"}
        ></input>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default LoginPage;
