import { PRODUCT_URL } from "../constants";
import apiSlice from "./apiSlice";
export const productApiSlice=apiSlice.injectEndpoints({//injecting endpoin into rootslice.
    endpoints:(builder)=>({//endpoints-This is an object where you define your API endpoints and actions. builder object provided by createApi to configure your endpoints and actions.
        getProducts:builder.query({//getProduts is the action name and value is reducer function or action function. builder.query allows query-based action.
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