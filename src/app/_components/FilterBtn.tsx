import { useSearchParams,useRouter, usePathname } from "next/navigation";


export default function FilterBtn() {
  let searchParams=useSearchParams()
  const router=useRouter();
  let path=usePathname();
  const handleFilter=(filtervalue:any)=>{
    let params= new URLSearchParams(searchParams);
    params.set("category",filtervalue);
     router.push(`${path}?${params}`) 
  }
  
  return (
    <div className='flex gap-30 w-full bg-white justify-center p-5'>
      <button className='font-mono text-md cursor-pointer' onClick={()=>handleFilter("groceries")}>Groceries</button>
      <button className='font-mono text-md cursor-pointer' onClick={()=>handleFilter("beauty")}>Make-Up</button>
      <button className='font-mono text-md cursor-pointer' onClick={()=>handleFilter("all")}> Products</button>
      <button className='font-mono text-md cursor-pointer' onClick={()=>handleFilter("fragrances")}>Fragrances</button>
      <button className='font-mono text-md cursor-pointer' onClick={()=>handleFilter("furniture")}>Furniture</button>
    </div>
  )
}
