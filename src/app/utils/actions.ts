"use server"

import { signIn, signOut } from "../auth"

export const logInAction = async()=>{
    await signIn("google",{redirectTo:"/account"});
}


export const singoutAction= async()=>{
    await signOut({redirectTo:"/"})
}

export const logInFacebookAction = async()=>{
    await signIn("facebook",{redirectTo:"/account"})
}