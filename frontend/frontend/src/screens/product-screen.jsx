import {useParams} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../components/rating'
import Loader from '../components/loader'
import Messages from '../components/messages'
import { useGetProdutsDetailsQuery } from '../slices/productApiSlice'

export default function ProductScreen(){
    const {id:Id}=useParams()
   const {data:product,isLoading,isError}=useGetProdutsDetailsQuery(Id)
{/*fluid makes the image responsive */}
{/*flush - removes outer border and spacing */}
    return (
        <>
           <Button className="btn, btn-dark my-3" to="/" disabled>
                Go Back
           </Button>

        {isLoading?(<Loader/>):isError?(<Messages variant='danger'>{isError?.data?.message || isError.error}</Messages>):<>
            <Row>
                <Col md={5}>
                    <Image src={`/src/assets${product.image}`} alt={product.name} fluid/>
                    
                    
                </Col>
                <Col md={4}>
                <ListGroup variant='flush'>
                    
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>{product.description}</p>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                            <Row>
                                <Col>price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row> 
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    <strong>{product.countInStock==0?'Out of stock':'In Stock'}</strong>
                                </Col>
                            </Row> 
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className='btn-block btn-dark'
                                    type='button'
                                    disabled={product.countInStock<=0}
                                >Add to Cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
</>}

            

        </>
    )
}