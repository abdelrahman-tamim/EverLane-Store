
export const getProducts=async()=>{
    let response= await fetch("https://dummyjson.com/products");
    return response.json()
  }

  export const getProductById= async(id:any)=>{
    let response=await fetch(`https://dummyjson.com/products/${id}`)
    return response.json()
  }

 