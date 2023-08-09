import { useState } from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom'
import {Form,Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../components/rating'
import Loader from '../components/loader'
import Messages from '../components/messages'
import { useGetProdutsDetailsQuery } from '../slices/productApiSlice'
import { useDispatch } from 'react-redux'
import  {addToCarts}  from '../slices/cartSlice'

export default function ProductScreen(){
    const {id:Id}=useParams()
    let [qty,setqty]=useState(1)

    const {data:product,isLoading,isError}=useGetProdutsDetailsQuery(Id)

    const dispatch=useDispatch()
    const navigate=useNavigate()
    
   const addToCartHandler=()=>{
        dispatch(addToCarts({...product,qty}))
        navigate('/cart')
   }
{/*fluid makes the image responsive */}
{/*flush - removes outer border and spacing */}
    return (
        <>
           <Link className="btn, btn-dark my-3" to="/" >
                Go Back
           </Link>

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

                           {
                             product.countInStock>0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                    <Form.Control as="select" value={qty} onChange={(e)=>setqty(Number(e.target.value))}>{/* value key refers to current value or selected value  */}
                                            {[...Array(product.countInStock).keys()].map((x)=>(
                                                <option value={x+1} key={x+1}>
                                                    {x+1}
                                                </option>
                                            ))}

                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                             )
                           }

                            

                            <ListGroup.Item>
                                <Button
                                    className='btn-block btn-dark'
                                    type='button'
                                    disabled={product.countInStock<=0}
                                    onClick={addToCartHandler}
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