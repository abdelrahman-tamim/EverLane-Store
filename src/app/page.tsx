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
   <div className="flex flex-col absolute top-1/7 gap-4 left-4 sm:left-8 md:left-10 md:top-1/4 lg:left-24 lg:top-1/3 sm:gap-5 md:gap-8 lg:gap-10">
    <div className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl">Your Cozy Era</div>
    <div className="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl "> Get Comfy-Chic  <br/><p className="hidden md:block lg:block"> with our new winter essintials. </p></div>
    <button className="bg-white p-2 text-black text-lg sm:text-xl lg:text-2xl w-25 sm:w-48 lg:w-60"><Link href="/products">Shop now </Link></button>
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
