"use client"
import { getProducts } from '../utils/getProductsfn';
import ProductsList from './page';
import Allproducts from './ProductsList';


export default async function Initalproducts() {
    let initalproducts= await getProducts();
    return (<Allproducts initalproducts={initalproducts} /> )

}
