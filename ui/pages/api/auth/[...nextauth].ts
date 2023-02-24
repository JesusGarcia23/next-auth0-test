import NextAuth, { Session, User } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { JWT } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID || '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
      issuer: process.env.AUTH0_ISSUER,
      idToken: true,
      authorization: {
        url: 'https://dev-e58xjmdiyxj32pdx.us.auth0.com/authorize',
        params: {
          audience: process.env.AUTH0_AUDIENCE,
          scope: "openid email profile",
          prompt: 'none'
        },
      },
      wellKnown: `${process.env.AUTH0_ISSUER}/authorize`,
      accessTokenUrl: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      profile: (profile: any) => {
        console.log('PROFILE!!', profile);
        return ({
        id: profile.sub,
        name: profile.name,
        email: profile.email, 
        image: profile.picture,
        aud: profile.aud,
      })},
    })
  ],
  session: {
    jwt: true,
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt(params: {token: JWT, user?: User | null, account?: any, profile?: any, isNewUser?: boolean | null}) {
      console.log('LMAOOO', params);
      if (params.account?.access_token) {
        params.token.accessToken = params.account.access_token;
      }
      return Promise.resolve(params.token);
    },
    async session({ session, user, token }: { session: Session; user: User; token: JWT }) {
      // console.log('SESSIOOON ', session, 'TOKEN', token, 'USER', user);
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
    // Enable CSRF protection
  csrf: true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options as any);