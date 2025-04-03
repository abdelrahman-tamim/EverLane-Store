"use client"
 import ProductCard from '../_components/ProductCard';
  import { useQuery } from '@tanstack/react-query';
  import { getProducts } from '../utils/getProductsfn';
  import { useSearchParams } from 'next/navigation';
  import { Data } from '../_types/types';
 
  type props ={
    initalproducts?:Data[]
  }

export default function Allproducts({initalproducts}:props) {
    let {data}=useQuery({queryKey:["productsData"],queryFn:getProducts,initialData:initalproducts})
         data=data?.products
        const searchParams=useSearchParams();
        let filterValue=searchParams.get("category");
    
        let filterdData=data?.filter((item:Data)=>{
          if(filterValue=="all") return item
         return item.category==filterValue
        })
  return (
    
    <>
     {
        filterValue?<ProductCard data={filterdData}/>:<ProductCard data={data}/>
      }

    </>
  )
}
