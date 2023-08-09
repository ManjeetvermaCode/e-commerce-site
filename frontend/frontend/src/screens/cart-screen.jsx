import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import Messages from '../components/messages'

import {addToCarts,removeFromCart} from '../slices/cartSlice'

export default function CartScreen(){
    const navigate=useNavigate();
    const dispatch=useDispatch()

    const cart=useSelector((state)=>state.cart)
    const {cartItems,totalPrice} =cart

    //handlers

    const addToCartHandler=async(product,qty)=>{
        dispatch(addToCarts({...product,qty}))
    }
    const removeFromCartHandler=async(id)=>{
        dispatch(removeFromCart(id))
    }
    const checkoutHandler=()=>{
        navigate('login?redirect=/shipping')
    }

    return (
        <>
        <Row>
            <Col md={8}>
                <h1 style={{marginBottom:'20px'}}>Shopping Cart</h1>
                {cartItems.length===0?(
                    <Messages variant='danger'>
                        <p>Your Cart is empty <Link to='/'>Go back</Link></p>
                    </Messages>
                ):(
                   <>
                     <ListGroup variant='flush'>
                        {
                            cartItems.map((item)=>(
                                <ListGroup.Item key={item._id}>
                                    <Row>
                                        <Col md={2}>
                                        <Image src={`src/assets${item.image}`} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col md={3}>
                                            <Link style={{color:'black'}} to={`/product/${item._id}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                        <Form.Control as="select" value={item.qty} onChange={(e)=>addToCartHandler(item,Number(e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map((x)=>(
                                                <option value={x+1} key={x+1}>
                                                    {x+1}
                                                </option>
                                            ))}

                                        </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item._id)}>
                                                <FaTrash/>
                                            </Button>
                                        
                                        </Col>

                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                   </>
                )}
            </Col> {/* end of 1st column which is taking 8 unit of horizontal space of cart page */}
            <Col md={4} style={{marginTop:'15px'}}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item variant='flush'>
                         <h2> Subtotal  ({cartItems.reduce((acc,item)=>acc+item.qty,0)}) items</h2>
                        
                         ${cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)}
                         {/* ${totalPrice} //we use not this becouse if the cart is empty then the price is less than 100 so tax 15% will be reflect on the page */}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' variant='dark' to='/checkout' className='btn-block' disabled={cartItems.length===0} onClick={()=>checkoutHandler()}>
                                Proceed to checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                
            </Col>
        </Row>
        </>
    )
}