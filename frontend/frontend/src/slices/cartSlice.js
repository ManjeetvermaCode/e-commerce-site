
import { createSlice } from "@reduxjs/toolkit";
import { upadateCart } from "../utils/cartUtils";
const initialState=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):{cartItems:[]}//this not only sets the initial state to null, it also assign the previously added items to the state, even if we refresh the page.


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCarts:(state,action)=>{
            const item=action.payload
            const isExist=state.cartItems.find((x)=>x._id===item._id)

            if(isExist){
                 state.cartItems=state.cartItems.map((x)=>(x._id===isExist._id?item:x));//if item exist replace it with the new value.
            }
            else{
            state.cartItems=[...state.cartItems,item]
            }
        
          return upadateCart(state)
        },
        removeFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(x=>x._id !== action.payload)
            return upadateCart(state)
        }
    }
})
export const {addToCarts,removeFromCart}=cartSlice.actions

export default cartSlice.reducer//exported this to store for setting global reducer