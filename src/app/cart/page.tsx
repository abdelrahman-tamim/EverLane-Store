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
  const items = useSelector((state:any) => state.cart.items);
  const cartitemsnumber = items.reduce((a:number,b:any) => {
    return a + b.quantity;
  }, 0);

  const totalcartprice = items.reduce((a:number,b:any) => {
    return a + (b.quantity * b.price);
  }, 0);

  return (
    <div className='min-h-screen p-4 md:p-6'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='space-y-4'>
          {items.map((item:Data) => (
            <div key={item.id} 
              className='flex flex-col sm:flex-row gap-4 sm:gap-7 
                border-b border-gray-200 pb-4 mb-3
                max-w-full overflow-hidden'>
              <div className='w-full sm:w-[200px] h-[200px] sm:h-[250px] relative'>
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className='w-full h-full object-cover'
                />
              </div>
              
              <div className='flex flex-col gap-2 flex-1 px-2'>
                <h2 className="text-xl md:text-2xl font-medium">{item.title}</h2>
                <p className="text-lg md:text-xl text-gray-600 line-clamp-2">{item.description}</p>
                <p className="text-lg md:text-xl text-gray-600">${item.price}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-2">
                  <Quantitybtn item={item}/>
                  <Actiontbtn 
                    item={item} 
                    isAdding={false} 
                    btnstyle='bg-black text-white p-2 hover:bg-gray-800 transition text-base md:text-lg'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className='mt-8 bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='flex flex-col p-4 md:p-6'>
            <div className='flex justify-between items-center px-4 md:px-10 w-full'>
              <div className='flex flex-wrap gap-2 items-baseline'>
                <span className='text-xl md:text-2xl font-bold'>Subtotal</span>
                <span className='text-lg md:text-xl'>({cartitemsnumber} items)</span>
              </div>
              <span className='text-xl md:text-2xl font-bold'>${totalcartprice}</span>
            </div>
            
            <button className='mt-6 w-full sm:w-auto sm:min-w-[200px] mx-auto 
              bg-[#262626] text-white px-6 md:px-8 py-3 
              hover:bg-gray-800 transition-colors duration-200 
              text-lg md:text-xl rounded-md'>
              Continue To Checkout
            </button>
            
            <p className='text-sm md:text-base text-center mt-3 
              font-semibold font-mono text-gray-700'>
              Psst, Get it before it sells out
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
