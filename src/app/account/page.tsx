import Image from 'next/image'
import { auth } from '../auth'

export default async function page() {
  const session = await auth()
  if (!session?.user) return <div>Please sign in</div>
  const { name, email, image } = session.user
  const firstName = name?.split(" ").shift()
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto my-3 p-6 md:p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6 md:mb-10">
          {firstName}&apos;s Profile
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative">
            <Image 
              className="rounded-full object-cover w-full h-full"
              src={image ?? '/default-profile.png'} 
              width={300} 
              height={300} 
              alt={name ?? 'Profile picture'}
              priority
            />
          </div>
          
          <div className="flex flex-col gap-4 w-full text-center md:text-left">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 uppercase">Full Name</p>
              <p className="text-xl md:text-3xl font-serif break-words">{name}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-600 uppercase">Email</p>
              <p className="text-xl md:text-3xl font-serif break-words">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
