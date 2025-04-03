import Image from 'next/image';
import React from 'react'
import head from "../../../public/Frame.svg"

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='flex flex-col gap-5 mt-8 '>
       
      {children}
    </div>
  )
}
