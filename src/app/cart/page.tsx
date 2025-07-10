"use client";
import React from 'react'
import { useSelector } from 'react-redux'
import Actiontbtn from '../_components/Actionbtn';
import Quantitybtn from '../_components/quantitybtn';

type Data = {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  quantity:number;
};
export default function Cart() {
const items=useSelector((state:any)=>state.cart.items);
const cartitemsnumber=items.reduce((a:number,b:any)=>{
  return a+b.quantity;
},0);

const totalcartprice=items.reduce((a:number,b:any)=>{
  return a+(b.quantity*b.price);
},0);
  return (
    <>
    <div className=' relative flex w-full justify-center'>
    <div className='mt-10'>
     
    {items.map((item:Data)=>{
      return (
        <div key={item.id} className='flex gap-7 w-[1000px] border-b-1 pb-4 mb-3'>
          <img width={200} height={700} src={item.images[0]} alt='image'/>
          <div className='flex flex-col gap-2'>
          <div className="text-2xl">{item.title}</div>
          <div className="text-xl text-gray-600 line-clamp-2">{item.description}</div>
           <div className="text-xl text-gray-600">{item.price}$</div>
           <div className="flex justify-between">
           <Quantitybtn item={item}/>
            <Actiontbtn item={item} isAdding={false} btnstyle={`mt-auto bg-black mb-[2px] mr-5 text-white p-2 hover:bg-gray-800 transition text-lg`}/>
           </div>
           
           </div>

          </div>
      )
    })}
    <div className=' flex flex-col px-2  bg-white shadow-lg pb-5 gap-1'>
    <div className='flex gap-2 justify-between p-4  px-10 w-[900px]'>
    <div className='flex gap-0.5' ><div className='text-2xl font-bold '>Subtotal     </div>
    <div className='text-[21px]' >({cartitemsnumber} items)</div></div>
    <div className='text-2xl font-bold'>{totalcartprice}$</div>
    </div>
    <button className='mt-6 mx-auto bg-[#262626] text-white px-8 py-3 hover:cursor-pointer text-xl w-sm'>Continue To Checkout</button>
    <div className=' text-[16px] mx-auto mt-3 font-semibold font-mono'>Psst,Get it befor it sells out</div>
    </div>
    </div>
    </div>
    
    </>
  )
}
