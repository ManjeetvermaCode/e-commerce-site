import { createSlice } from "@reduxjs/toolkit";

const initialState=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):{cartItems:[]}//this not only sets the initial state to null, it also assign the previously added items to the state, even if we refresh the page.
const decimalFunction=(num)=>{
    return (Math.round(num*100/100)).toFixed(2)
}//helper function for rounding the price to 2 digit.

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCarts:(state,action)=>{
            const item=action.payload

            const isExist=state.cartItems.find(x=>{x._id===item._id})

            if(isExist){
                 state.cartItems=state.cartItems.map((x)=>{x._id===isExist._id})?item:x;//if item exist replace it with the new value.
            }
            else{
            state.cartItems=[...state.cartItems,item]
            }
        
            //All items price

             state.itemsPrice=decimalFunction(state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0))
            //shipping price(//if greater than 100$, free shipping else 10$ shipping charge)
            state.shippingPrice=decimalFunction(state.itemsPrice<100?10:0)

            //total tax 

            state.taxes=decimalFunction(Number((0.15*state.itemsPrice).toFixed(0)))
            //totol bill price
            state.totalPrice=(
                Number(state.itemsPrice)+
                Number(state.shippingPrice)+
                Number(state.taxes)
            ).toFixed(2)

        localStorage.setItem('cart',JSON.stringify(state))
        }
    }
})
export const {addToCarts}=cartSlice.actions

export default cartSlice.reducer//exported this to store for setting global reducer