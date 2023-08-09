export const roundToTwo=(num)=>{
    return (Math.round(num*100/100)).toFixed(2)
}//helper function for rounding the price to 2 digit.

export const upadateCart=(state)=>{
     //All items price

     state.itemsPrice=roundToTwo(state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0))

     //shipping price(//if greater than 100$, free shipping else 10$ shipping charge)
 state.shippingPrice=roundToTwo(state.itemsPrice<100?10:0)

     //total tax 

     state.taxes=roundToTwo(Number((0.15*state.itemsPrice).toFixed(2)))
     //totol bill price
     state.totalPrice=(
         Number(state.itemsPrice)+
         Number(state.shippingPrice)+
         Number(state.taxes)
     ).toFixed(2)

return localStorage.setItem('cart',JSON.stringify(state))
}