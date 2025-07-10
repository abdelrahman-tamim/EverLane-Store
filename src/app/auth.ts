import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./utils/zod";
import { ZodError } from "zod";
import { getUserFromDb } from "./utils/actions";

 export const {signIn,auth,signOut,handlers}=NextAuth({
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy:"jwt",
    },
    providers:[
        Credentials({
            credentials:{
                email:{},
                password:{},
            },
            authorize: async(credentials)=>{
                try {
            console.log(credentials);
            let {email,password}= await signInSchema.parseAsync(credentials);
            console.log(email)
           let user = await getUserFromDb(email,password); 
            console.log("thw",user);
            if(!user){
                return null;
            }
            return user;
                } catch (error) {
                    if(error instanceof ZodError){
                        console.error("Validation errors:", error.errors);
                        return null;
                    }
                    console.error("Authentication error:", error);
                    return null;
                }
            
            }
        }),
        Google({
        clientId:process.env.AUTH_GOOGLE_ID,
        clientSecret:process.env.AUTH_GOOGLE_SECRET,
        }),
        Facebook({
            clientId:process.env.AUTH_FACEBOOK_ID,
            clientSecret:process.env.AUTH_FACEBOOK_SECRET
            
        })],
    pages:{
        signIn:"/login"
    },
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id;
                token.email=user.email;
            }
            return token
        },
        async session({ session, token }) {
            if(token && session.user){
                session.user.id = token.id as string;
                session.user.email=token.email as string;
            }
            return session;
        },
       authorized({auth}){
            return !!auth
        }
    }
})
