"use client"
import { logInAction , logInFacebookAction} from '../utils/actions'
import facebookimg from "../../../public/facebook.svg"
import goggleimg from "../../../public/google.webp"
import Image from 'next/image'

export default function LogInBtn() {
  return (
    <>
    <div className='flex flex-col items-center my-20 gap-15 '>
    <form action={logInAction}>
      <div className=' cursor-pointer flex gap-3 text-3xl border-2 font-semibold border-gray-500 py-5 px-9.5 align-middle justify-between 
      bg-white shadow-xl
      '>
        <Image className='cursor-pointer' src={goggleimg} height={80} alt='google logo'/>
        <button className='cursor-pointer'  type='submit'>
            Log In With Google 
        </button>
        </div>
    </form>
     <form  action={logInFacebookAction}>
      
      <div className=' cursor-pointer flex text-3xl border-2 font-semibold border-gray-500 py-5 px-5 gap-3  align-middle justify-center 
       bg-white shadow-xl
      '>
      <Image className='cursor-pointer' src={facebookimg} height={85} alt='facebook logo'/>
     <button className='cursor-pointer' type='submit'>
         Log In With Facebook
     </button> 
     </div>
 </form>
 </div>
 
 </>
  )
}
