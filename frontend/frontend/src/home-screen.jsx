import Product from './product-card'
import products from './products'

import {Row,Col} from 'react-bootstrap'
export default function HomeScreen(){
    const allproduct=products
    console.log(allproduct)
    return (
        <>
            <Row>
                {
                   allproduct.map(p=>{
                     return <Col sm={12} md={6} lg={4} xl={2} >
                         <Product product={p}/>
                        </Col>
                
                    })
                }
            </Row>
        </>
    )
}