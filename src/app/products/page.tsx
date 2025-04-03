  "use client"
 
  import FilterBtn from '../_components/FilterBtn';
  import { Data } from '../_types/types';
import Allproducts from './ProductsList';
 
  type props ={
    isHome:boolean,
    initalproducts:Data[]
    
  } 



  export default function ProductsList() {

    return (
      <>
           <FilterBtn/>
          <Allproducts/>
      </>
    );
  }
