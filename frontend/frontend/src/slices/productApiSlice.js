import { PRODUCT_URL } from "../constants";
console.log(PRODUCT_URL)
import apiSlice from "./apiSlice";
export const productApiSlice=apiSlice.injectEndpoints({//injecting endpoin into rootslice.
    endpoints:(builder)=>({
        getProducts:builder.query({//getProduts is the action name and value is reducer function or action function
            query:()=>(
                {
                    url:PRODUCT_URL,
                }
            ),
            keepUnusedDataFor:5,

        }),
        getProdutsDetails:builder.query({
            query:(productId)=>(
                {
                    url:`${PRODUCT_URL}/${productId}`
                }
        )
        })
         
    })
   
})

export const {useGetProductsQuery,useGetProdutsDetailsQuery}=productApiSlice