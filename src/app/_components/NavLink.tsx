"use client"
import { usePathname } from 'next/navigation';
import {Cairo} from "next/font/google";
import Link from 'next/link';



const cairo=Cairo({subsets:["latin"]})


export default function NavLink({name,path}:{name:string,path:string}) {
    const pathname=usePathname();

  return (
    <>
        <li key={name} className={`${cairo.className} text-lg`}><Link href={path}>
           <div className={pathname==path?`border-b-3`:``}> {name}</div>
            </Link></li>

    </>
  )
}
