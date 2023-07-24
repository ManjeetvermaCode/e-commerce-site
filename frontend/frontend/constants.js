
const BASE_URL=process.env.NODE_ENV==='development'?'http://localhost:3000':""
const PRODUCT_URL='/products'
const USER_URL='/users'
const ORDERS_URL='/orders'
const PAYPAL_URL='/config/paypal'

export default (BASE_URL,PRODUCT_URL,USER_URL,ORDERS_URL,PAYPAL_URL)
