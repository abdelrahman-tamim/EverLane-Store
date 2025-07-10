import Image from "next/image";
import homeimg from "../../public/home.jpg";
import Link from "next/link";
import Catagories from "./categories/page";
import Allproducts from "./products/ProductsList";



export const metadata={
  title:"Everlane",
  description: "Fashion is very mush Alive.",
}


export default function Home() {
  return (
   <>
   <div className="relative">
   <Image className="w-full" src={homeimg} alt="homeimg"/>
   <div className="flex flex-col absolute top-1/3 gap-10 left-25">
    <div className="text-white text-6xl">Your Cozy Era</div>
    <div className="text-white text-3xl"> Get Comfy-Chic  <br/> with our new winter essintials.</div>
    <button className="bg-white p-2 text-black text-2xl w-60 "><Link href="/products">Shop now </Link></button>
   </div>
   </div>
   
   <div className=" flex justify-center flex-col gap-10 ">
   <div className="mt-10 mx-auto text-4xl font-mono border-b-2 pb-3">Shop By Catagory</div>
   <Catagories/>
   </div>
   <div className=" flex justify-center flex-col">
   <div className="mt-10 mx-auto text-4xl font-mono border-b-2 pb-3">Products</div> 
    <Allproducts/>
   </div>
  
   </>
  );
}
