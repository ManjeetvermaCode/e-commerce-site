// the way our application will work that the user will first place the order and then user will pay, ispaid(userModel.js) flag will set to true, and after products delivery admin will set the isDelivered(userModel.js) flag to true
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {Row,Col, ListGroup,Image,Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import Stage from '../components/currentStage'
import {toast} from 'react-toastify'
import Messages from '../components/messages'
import Loader from '../components/loader'
import {useCreateOrderMutation} from '../slices/orderApiSlice'
import { clearCartItems } from "../slices/cartSlice.js"

export default function PlaceOrderScreen() {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [createOrder,{isLoading,isError}]=useCreateOrderMutation();
    const cart=useSelector((state)=>state.cart)

    useEffect(()=>{
        if(!cart.shippingAddress.address){
            navigate('/shipping')
        }
        else if(!cart.paymentInfo){
            navigate('/payment')
        }
    },[cart.shippingAddress.address,cart.paymentInfo,navigate])//if the follwing values change or get updated this hook will execute

    const placeOrderHandler=async()=>{
        try {
            const res=await CreateOrder({
                orderItems:cart.cartItems,
                shippingAddress:cart.shippingAddress,
                itemsPrice:cart.itemsPrice,
                taxPrice:cart.taxes,
                shippingPrice:cart.shippingPrice,
                totalPrice:cart.totalPrice,
                paymentMethod:cart.paymethodMethod
            }).unwrap()
            dispatch(clearCartItems())
            navigate(`/orders/`)
        } catch (error) {
            toast.error(error)
        }
        
    }

    return(
        <>
        <Stage step1 step2 step3 step4 />

            <Row>

                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <div>
                                <strong>Address: </strong>
                                {cart.shippingAddress.address} {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>
                                Method:
                            </strong>
                            {cart.paymentInfo}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {cart.cartItems.length===0?(
                                <Messages>Your Cart is empty</Messages>
                            ):(
                                <ListGroup>
                                    {cart.cartItems.map((i,idx)=>(
                                        <ListGroup.Item key={idx}>
                                            <Row >
                                                <Col  md={1}><Image src={`src/assets${i.image}`} fluid rounded alt={i.name}/></Col>
                                                <Col><Link to={`/product/${i._id}`}>{i.name}</Link></Col>
                                                <Col>{i.qty} x ${i.price} = ${i.qty*i.price}</Col>
                                            </Row>
                                        </ListGroup.Item>

                                    ))}
                                </ListGroup>

                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                    <Col>
                                        ${cart.itemsPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>
                                        ${cart.shippingPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                    <Col>
                                        ${cart.taxes}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>
                                        ${cart.totalPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {isError && <Messages>{isError.data}</Messages>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                    type='Button'
                                    onClick={placeOrderHandler}
                                    className="btn-block"
                                    // disabled={cart.cartItems.length===0}
                                >Place Order</Button>
                            </ListGroup.Item>
                            {isLoading && <Loader/>}
                            
                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </>
    )
    
}