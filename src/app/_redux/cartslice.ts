import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type cartItem={
    id:number,
    title:string,
    images:string[],
    description:string,
    price:number,
    quantity:number
};

type cartState={
    items:cartItem[],
}

const initialState:cartState={
    items:[]
}

let cart=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<cartItem>)=>{
            let existedItem=state.items.find((item)=>item.id==action.payload.id);
            if(existedItem) {
                existedItem.quantity++;
            }else{
                state.items.push({...action.payload,quantity:1});
            }
        },
        removeFromCart:(state,action:PayloadAction<cartItem>)=>{
           state.items= state.items.filter((item)=>item.id !=action.payload.id)
        },
        decreaseItem:(state,action:PayloadAction<cartItem>)=>{
            let minusItem= state.items.find((item)=>item.id == action.payload.id);
            if(minusItem){
                minusItem.quantity--;
            }
            if(minusItem?.quantity==0){
                state.items= state.items.filter((item)=>item.id!=minusItem.id)
            }
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
})


export const {addToCart,removeFromCart,decreaseItem,clearCart}=cart.actions;
export default cart.reducer;