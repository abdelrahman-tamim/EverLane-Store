"use client";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from '../_redux/cartslice';
type Data = {
    title: string;
    price: number;
    description: string;
    images: string[];
    id: number;
    quantity:number;
  };


export default function Actiontbtn({item,btnstyle,isAdding}:{item:Data,btnstyle:string,isAdding:boolean}) {
    let dispatch=useDispatch();
  return (
    <>
    {
      isAdding?  <button 
      className={btnstyle}
      onClick={()=>dispatch(addToCart(item))}
    >
     {
      <p> Add to Cart</p>
     } 
    </button>:
     <button 
     className={btnstyle}
     onClick={()=>dispatch(removeFromCart(item))}
   >
    {
     <p>Remove</p>
    } 
   </button>

    }
    </>
  
  )
}
