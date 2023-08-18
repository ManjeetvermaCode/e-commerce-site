import { USER_URL_LOGIN,USER_URL_LOGOUT } from "../constants";
import apiSlice from "./apiSlice";
export const userApiSlice=apiSlice.injectEndpoints({//injecting endpoin into rootslice.
    endpoints:(builder)=>({
        login:builder.mutation({//used to make changes to data on the server (like creating or updating)
            query:(data)=>(
                {
                    url:USER_URL_LOGIN,
                    method:'post',
                    body:data
                    
                }
            ),
        }),
        logout:builder.mutation({
            query:()=>({
                url:USER_URL_LOGOUT,
                method:'post'
            })
        })
         
    })
   
})

export const {useLoginMutation,useLogoutMutation}=userApiSlice