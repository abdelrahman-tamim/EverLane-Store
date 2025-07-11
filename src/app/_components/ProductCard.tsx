import Link from "next/link";
import { Data } from "../_types/types";
import Actiontbtn from "./Actionbtn";
import Expandtext from "./Expandtext";

type props={
    data:Data[]
}

export default function ProductCard({data}:props) {
  return (
    <>
       <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {data?.map((item:Data) => (
        <div 
          key={item.id} 
          className="flex flex-col bg-white p-4 shadow-lg rounded-xl hover:shadow-xl transition-shadow h-[480px]"
        >
          <Link href={`/products/${item.id}`}>
            <div className="w-full h-64 relative flex items-center justify-center">
              <img 
                src={item.images[1] || item.images[0]} 
                alt={item.title}  
                className="rounded-md object-contain w-full h-full max-w-xs max-h-60 sm:max-w-full sm:max-h-64"
                style={{objectFit: 'cover'}}
              />
            </div>
          </Link>
          <div className="text-lg font-semibold text-gray-900 mt-4">${item.price}</div>
          <div className="line-clamp-1 text-black font-medium">{item.title}</div>
         {/*  <div className="line-clamp-2 text-gray-700 my-2 text-sm">{item.description}</div> */}
         <Expandtext item={item}/>
          <Actiontbtn item={item} isAdding={true} btnstyle={`mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-lg`} />
        </div>
      ))}
    </div>
    </>
  )
}
