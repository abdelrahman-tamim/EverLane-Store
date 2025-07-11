import React from 'react'
import bestsellers from "../../../public/bestsellers.svg"
import latest from "../../../public/latest.svg"
import occasion from "../../../public/occasion.svg"
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Catagories",
  description: "Fashion is very mush Alive.",
}

export default function Catagories() {
  return (
    <div className='flex flex-col md:flex-row gap-6 mx-auto p-4'>
      <div className='relative group w-full'>
        <Link href="categories/bestsellers" className='relative block'>
          <Image src={bestsellers} alt='bestsellers' className='w-full'/>
          <div className='absolute inset-0 flex items-center justify-center'>
            <button className='bg-white/90 hover:bg-white p-2 text-black text-lg md:text-xl lg:text-2xl w-auto px-6 transition-all'>
              Our Latest
            </button>
          </div>
        </Link>
      </div>

      <div className='relative group w-full'>
        <Link href="categories/latest" className='relative block'>
          <Image src={latest} alt='latest' className='w-full'/>
          <div className='absolute inset-0 flex items-center justify-center'>
            <button className='bg-white/90 hover:bg-white p-2 text-black text-lg md:text-xl lg:text-2xl w-auto px-6 transition-all'>
              New Arrivals
            </button>
          </div>
        </Link>
      </div>

      <div className='relative group w-full'>
        <Link href="categories/occasion" className='relative block'>
          <Image src={occasion} alt='occasion' className='w-full'/>
          <div className='absolute inset-0 flex items-center justify-center'>
            <button className='bg-white/90 hover:bg-white p-2 text-black text-lg md:text-xl lg:text-2xl w-auto px-6 transition-all'>
              Shop By Occasion
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}
