import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { env } from "process";

export const options: NextAuthOptions = {
   secret: env.NEXTAUTH_URL,
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID ?? "",
         clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
         authorization: {
            params: {
               prompt: "consent",
               access_type: "offline",
               response_type: "code"
            }
         }
      }),
      FacebookProvider({
         clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
      })
   ],
   pages: {
      signIn: "/login"
   }
   
}