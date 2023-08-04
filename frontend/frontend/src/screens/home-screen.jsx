import Product from '../components/product-card.jsx'
import {Row,Col} from 'react-bootstrap'
import  {useGetProductsQuery}  from '../slices/productApiSlice'
import Loader from '../components/loader.jsx'
import Messages from '../components/messages.jsx'

export default function HomeScreen(){

    const {currentData:data,isLoading,isError} = useGetProductsQuery()
    // console.log(isError)
// console.log(useGetProductsQuery().currentData)    
    return (


        <>


        {isLoading?(<Loader/>) : isError?(<Messages variant='danger' sx={{mt:3}}>{isError?.data?.message || isError.error}</Messages>):(<>
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