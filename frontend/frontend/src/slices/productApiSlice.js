import { PRODUCT_URL } from "../constants";
console.log(PRODUCT_URL)
import apiSlice from "./apiSlice";
export const productApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>(
                {
                    url:PRODUCT_URL,
                }
            ),
            keepUnusedDataFor:5,

        })
    })
   
})

export const {useGetProductsQuery}=productApiSlice