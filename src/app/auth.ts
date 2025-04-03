import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

 export const {signIn,auth,signOut,handlers}=NextAuth({
    providers:[Google({
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
       authorized({auth}){
            return !!auth
        }
    }
})
