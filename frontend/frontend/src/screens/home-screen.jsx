import Product from '../components/product-card.jsx'
import {Row,Col} from 'react-bootstrap'
import  {useGetProductsQuery}  from '../slices/productApiSlice'

export default function HomeScreen(){

    const {currentData:data,isLoading,isError} = useGetProductsQuery()
    // console.log(isError)
// console.log(useGetProductsQuery().currentData)    
    return (
        <>

        {isLoading?(<h1>Loading...</h1>) : isError?(<div>error.error</div>):(<>
            <h1>this is heaing</h1>
        
        <Row>
                {
                    
                    data.map(p => (
                        <Col sm={12} md={6} lg={4} xl={2} key={p._id}>
                            <Product product={p} />
                        </Col>
                    ))
                }
                
            </Row> 
        </>)}

       
        </>
    )
}