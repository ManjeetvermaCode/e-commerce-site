import { USER_URL } from "../constants";
import apiSlice from "./apiSlice";
export const userApiSlice=apiSlice.injectEndpoints({//injecting endpoin into rootslice.
    endpoints:(builder)=>({
        login:builder.mutation({//used to make changes to data on the server (like creating or updating)
            query:(data)=>(
                {
                    url:USER_URL,
                    method:'post',
                    body:data
                    
                }
            ),
        }),
         
    })
   
})

export const {useLoginMutation}=userApiSlice