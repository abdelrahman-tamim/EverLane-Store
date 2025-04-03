import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";

let store=configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default store;
export type Rootstate=ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;