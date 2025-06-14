"use client"
import React, { useState } from 'react'
import { Data } from '../_types/types';

export default function Expandtext({item}:{item:Data}) {
  let [isExpanded,setExpanded]=useState(false);
  return (
   <>
   <div>
    {
        isExpanded? <div  className="  text-gray-600 text-lg line-clamp-3 transition-all duration-300 max-h-50">{item.description}</div>:<div className='line-clamp-1 transition-all duration-300 '>{item.description}</div>


    }
    {
        isExpanded?<button className='cursor-pointer text-blue-800' onClick={()=>setExpanded(!isExpanded)}>See less</button>:<button className='cursor-pointer text-blue-800 ' onClick={()=>setExpanded(!isExpanded)}>See more</button>
    }
    </div>
   </>
  )
}
