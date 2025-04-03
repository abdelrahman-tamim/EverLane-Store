"use client"

import ProductCard from "@/app/_components/ProductCard";
import { Data } from "@/app/_types/types";
import { getProducts } from "@/app/utils/getProductsfn"
import { useQuery } from "@tanstack/react-query"


export default function page() {
  let {data}=useQuery({queryKey:["productsData"],queryFn:getProducts})
  data=data?.products.filter((item:Data)=>{
    return item.category=="beauty";
  })

    return (
    <>
    <ProductCard data={data}/>
    </>
  )
}
