"use client"
import { useDispatch } from "react-redux"
import { addToCart, decreaseItem } from "../_redux/cartslice";
import React from "react";
type Data = {
    id: number;
    title: string;
    description: string;
    images: string[];
    price: number;
    quantity:number;
  };
  

export default function Quantitybtn({item}:{item:Data}) {
    let dispatch=useDispatch();
  return (
   <div className="flex mt-4 gap-3 border border-gray-300 w-[130px] p-2 justify-around align-middle">
     <button onClick={()=>{dispatch(decreaseItem(item))}} className="text-3xl">–</button>
     <p className="text-2xl mt-1">{item.quantity}</p>
    <button onClick={()=>{dispatch(addToCart(item))}} className="text-3xl">+</button>
    </div>
  )
}
