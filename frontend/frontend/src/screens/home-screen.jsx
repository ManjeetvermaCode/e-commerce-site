import Product from '../components/product-card.jsx'
import axios from 'axios'
import { useEffect,useState } from 'react'

import {Row,Col} from 'react-bootstrap'

export default function HomeScreen(){
    let [products,setProducts]=useState([])

    useEffect(()=>{
        const fetchProduct=async()=>{
            try {
                const response = await axios.get("http://localhost:5000/products");//we may want to replace the url, when uploading the site to the internet
                setProducts(response.data);  
            } catch (error) {
                console.error(error)
            }
            
        }
         fetchProduct()
    },[])

    
    return (
        <>
        <h1>this is heaing</h1>
        
       
        <Row>
                {
                    

                   products.map(p=>
                      <Col sm={12} md={6} lg={4} xl={2} >
                         <Product key={p._id} product={p}/>
                        </Col>
                
                    )
                }
            </Row> 
        </>
    )
}