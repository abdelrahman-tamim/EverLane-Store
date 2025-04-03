import Image from 'next/image'
import { auth } from '../auth'

export default async function page() {
  const {user:{name,email,image}}= await auth()
  const firstName=name.split(" ").shift()
  return (
    <>
    <div className=' my-3 py-10 px-5 w-fit mx-auto bg-white shadow-lg'>
    <div className=' flex justify-center  text-4xl font-semibold mb-10 '>{firstName}'s Profile </div>
    <div className=' gap-7 flex  my-7  y-10 items-center'>
    <Image className='rounded-full' src={image} width={300} height={300} alt='lip'/>
    <div className='flex flex-col gap-3'>
    <div className='text-3xl font-serif  '>Fullname: {name}</div>
    <div className='text-3xl font-serif '>Email: {email}</div>
    </div>
    </div>
    </div>
    </>
  )
}
