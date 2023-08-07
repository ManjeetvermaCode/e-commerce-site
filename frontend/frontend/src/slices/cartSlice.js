import { createSlice } from "@reduxjs/toolkit";

const initialState=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):{cartItems:[]}

const decimalFunction=(num)=>{
    return (Math.round(num*100/1000)).toFixed(2)
}//helper function for rounding the price to 2 digit.

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCarts:(state,action)=>{
            const item=action.payload

            const isExist=state.cartItems.find(x=>{x===state.cartItems.item})

            if(isExist){
                 state.cartItems=state.cartItems.map((x)=>{x._id===state.cartItems.item})?item:x;
            }
            else{
            state.cartItems=[...state.cartItems,item]
            }
        
            //All items price

             state.itemsPrice=decimalFunction(state.cartItems.reduce((acc,item)=>acc+=item.price*item*qty,0))

            //shipping price(//if greater than 100$, free shipping else 10$ shipping charge)
            state.shippingPrice=decimalFunction(state.itemsPrice>=100?0:10)

            //total tax 

            state.taxes=decimalFunction(Number((0.15*state.itemsPrice).toFixed(0)))
            //totol bill price
            state.totalPrice=(
                Number(state.itemsPrice)+
                Number(state.shippingPrice)+
                Number(state.taxes)
            ).toFixed(2)

        const addedItem=localStorage.setItem('cart',JSON.stringify(state))
        console.log(addedItem)
        }
    }
})
export const {addToCarts}=cartSlice.actions

export default cartSlice.reducer//exported this to store for setting global reducer