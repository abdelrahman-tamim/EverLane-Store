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


export const signInAction= async(formData:FormData)=>{
    const email=formData.get("email") as string;
    const password=formData.get("password") as string;  
   const result= await signIn("credentials",{email,password,redirect:false});

   
}


export const getUserFromDb= async(email:string,password:string)=>{
    try {
        const response= await fetch("https://shoppix-api.vercel.app/users");
        const users=await response.json();
        const user=users.find((user:any)=>{
            return user.Email==email
        });
        console.log("Action user",user);
        if(!user){
            return null
        }

        const validPass=user.Password==password;

        if(!validPass){
            return null
        }

        return user;
        
    } catch (error) {
        console.error("Failed",error);
        return null
    }    

}