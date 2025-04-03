import React from 'react'
import bestsellers from "../../../public/bestsellers.svg"
import latest from "../../../public/latest.svg"
import occasion from "../../../public/occasion.svg"
import Link from 'next/link'
import Image from 'next/image'
export const metadata={
  title:"Catagories",
  description: "Fashion is very mush Alive.",
}

export default function Catagories() {
  return (
    <div className='flex gap-6 mx-auto'>
       <div className='relative'> <Link href="categories/bestsellers"><Image src={bestsellers} alt='bestsellers'></Image><button className='bg-white p-2 text-black text-2xl absolute top-80 left-20 w-70'>Our Latest</button></Link>
   
       </div>
      <div  className='relative' > <Link href="categories/latest"><Image src={latest} alt='latest'></Image><button className='bg-white p-2 text-black text-2xl absolute top-80 left-20 w-70'>New Arrivals</button></Link>
      </div> 
       <div  className='relative'> <Link href="categories/occasion"><Image src={occasion} alt='occasion'></Image>  <button className='bg-white p-2 text-black text-2xl absolute top-80 left-20 w-70'>Shop By occasion</button></Link>
     </div>
      
    </div>
  )
}
