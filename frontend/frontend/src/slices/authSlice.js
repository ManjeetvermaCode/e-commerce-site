import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState={userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null}

const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{//reducers is the only valid key
        setCredentials:(state,action)=>{
            state.userInfo=action.payload,//state.xyz is used for storing data in store
            localStorage.setItem('userInfo',JOSN.stingify(action.payload))//same data in localstorage in in redux store.
        }
    }
})

export  const setCredentials=AuthSlice.actions

export default AuthSlice.reducer//only .reducer is valid