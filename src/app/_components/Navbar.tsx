import React from 'react'
import logo from "../../../public/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import searchimg from "../../../public/search.svg"
import cartimg from "../../../public/cart.svg"
import accountimg from "../../../public/account.svg"
import signoutimg from "../../../public/logout.svg"
import {Cairo} from "next/font/google"
import { auth } from '../auth'
import NavLink from './NavLink'
import Signoutbtn from './Signoutbtn'
import MobileMenu from './MobileMenu'
 
const routes=[
  {
    name:"Home",
    path:"/"
  },
  {
    name:"Products",
    path:"/products"
  },
  {
    name:"Categories",
    path:"/categories"
  }
]

export default async function Navbar() {
  const session = await auth()
  console.log(session)

  return (
    <div>
      <ul className='flex py-5 mx-4 md:mx-10 justify-between items-center'>
        <MobileMenu routes={routes} />
        
        <div className='hidden md:flex space-x-12'>
          {routes.map(({name,path}) => (
            <NavLink key={path} name={name} path={path}/>
          ))}
        </div>

        <li className='min-w-[120px] md:min-w-[150px]'>
          <Image className='w-[180px] md:w-[250px]' src={logo} alt='logo'/>
        </li>

        {session ? (
          <div className='flex items-center gap-2 md:gap-4'>
            
            <div className='hidden sm:block'>
              <Image src={searchimg} alt='search' width={24} height={24} />
            </div>
            
         
            <Link href="/cart" className='transform hover:scale-105 transition-transform'>
              <Image src={cartimg} alt='cart' width={24} height={24} />
            </Link>
            <Link href="/account" className='transform hover:scale-105 transition-transform'>
              <Image src={accountimg} alt='account' width={24} height={24} />
            </Link>

          
            <div className='flex items-center gap-1 md:gap-2 ml-2 md:ml-8 bg-white'>
              <div className='font-semibold text-gray-700 text-sm md:text-md font-mono'>
                <Signoutbtn/>
              </div>
              <Image 
                src={signoutimg} 
                width={16} 
                height={16} 
                alt='signout'
                className='md:w-[18px] md:h-[18px]'
              />
            </div>
          </div>
        ) : (
          <div className='flex gap-1 text-sm md:text-md font-mono'>
            <p className='hidden lg:block'>Want to Shop With us?</p>
            <p className='font-semibold text-gray-600 border-b-1'>
              <Link href="/login">Log in</Link>
            </p>
          </div>
        )}
      </ul>
      <hr/>
    </div>
  )
}
