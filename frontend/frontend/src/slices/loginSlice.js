import { USER_URL_LOGIN,USER_URL_LOGOUT,USER_URL_REGISTER } from "../constants";
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
        register:builder.mutation({
            query:(data)=>({
                url:USER_URL_REGISTER,
                method:'post',
                body:data
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:USER_URL_LOGOUT,
                method:'POST'
            })
        })
         
    })
   
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation}=userApiSlice