import Image from "next/image";
import Actiontbtn from "../../_components/Actionbtn";
import { title } from "process";
import { Data } from "@/app/_types/types";
import Expandtext from "@/app/_components/Expandtext";



type Props = {
  params: Promise<{ id: string }>;
};

  export const generateMetadata= async({params}:Props)=>{
    let {id}=await params;
    const response=await fetch(`https://dummyjson.com/products/${id}`);
    const data:Data= await response.json()
    return {title:data.title}
  }
  

export default async function ProductById({ params }: Props) {
  let { id } = await params;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let data: Data = await response.json();
  return (
    <div className="max-w-6xl mx-auto mt-5 p-8 bg-white shadow-lg rounded-xl flex flex-col md:flex-row gap-8 w-full">
    
      <img 
        className="w-full md:w-2/3 h-[500px] object-cover rounded-lg shadow-md" 
        src={data.images[0]} 
        alt={data.title} 
      />
      
     
      <div className="flex flex-col justify-between w-full md:w-1/3">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="text-gray-600 text-lg my-4">{data.description}</p>
          <span className="text-2xl font-semibold text-black">${data.price}</span>
        </div>
        <Actiontbtn item={data} btnstyle={`mt-6 bg-black text-white px-8 py-3 rounded-lg hover:cursor-pointer text-lg`} isAdding={true}/>
      </div>
    </div>
  );
}
