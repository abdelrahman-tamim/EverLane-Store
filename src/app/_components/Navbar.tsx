import React from 'react'
import logo from "../../../public/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import searchimg from "../../../public/search.svg";
import cartimg from "../../../public/cart.svg";
import accountimg from "../../../public/account.svg";
import signoutimg from "../../../public/logout.svg";

import {Cairo} from "next/font/google";

import { auth } from '../auth';
import NavLink from './NavLink';
import Signoutbtn from './Signoutbtn';
const cairo=Cairo({subsets:["latin"]})

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
      <ul className='flex py-5 mx-10 justify-between  '>
        <div className='flex space-x-12 '>
        {
          routes.map(({name,path})=>{
           return <NavLink name={name} path={path}/>
          })
        }
        </div>
        <li ><Image className='h-full w-55' src={logo} alt='logo'/></li>
        {
          session?(<div className='flex gap-2'>
            <Image src={searchimg} alt='search'></Image>
           <Link href="/cart"><Image src={cartimg} alt='cart'></Image></Link> 
          <Link href="/account"><Image src={accountimg} alt='account'></Image></Link> 
          <div className='flex mt-2 ml-8 bg-white gap-2'><p className='font-semibold text-gray-700 border-b-1 text-md font-mono'><Signoutbtn/></p><Image className='' src={signoutimg} width={18} height={18} alt='signout'/></div>
          </div> ):(
            <div className={`flex gap-1 text-md font-mono `}>Want to Shop With us? <p className='font-semibold text-gray-600 border-b-1'><Link href="/login">Log in Now </Link></p></div>
          )
        }
         
      </ul>
      <hr/>
    </div>
    
  )
}
