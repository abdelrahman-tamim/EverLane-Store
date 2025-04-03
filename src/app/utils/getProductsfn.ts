
export const getProducts=async()=>{
    let response= await fetch("https://dummyjson.com/products");
    return response.json()
  }