//this is a base slice

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'//'createApi' is used for asynchronous fetching of data(allows you to create a customized API client for interacting with your backend server.), 'createSplice' for synchronous retrieval. 
import {BASE_URL} from '../constants.js'
const baseQuery=fetchBaseQuery({baseUrl:BASE_URL})//handles the technical parts of sending and receiving messages between your frontend and backend. 'baseUrl' is the main address of application.

const apiSlice=createApi({//is like a magical tool that helps you set up a way to talk to your backend server. it establishes a connection between frontend and backend.
    baseQuery:baseQuery,// This is like the default way of sending messages to the server. It knows how to talk to the server using common rules like sending and receiving data.(baseQuery is basically send and receive of data.)
    tagTypes:['Product','Order','User'],
    endpoints:(builder)=>({}) //These are like specific channels for different types of messages. You can create channels for getting data (queries) or changing data (mutations) on the server.(endpoint is basically used for quering and mutation(updating) data.)
})

export default apiSlice
//createApi and fetchBaseQuery Together, they make it easier to get and change data in your React and Redux app.