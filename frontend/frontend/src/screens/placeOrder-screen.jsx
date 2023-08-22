// the way our application will work that the user will first place the order and then use will pay, ispaid(userModel.js) flag will set to true, and after products delivery admin will set the isDelivered(userModel.js) flag to true
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {Row,Col, ListGroup,Image,Card} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import Stage from '../components/currentStage'
import {toast} from 'react-toastify'
import messages from '../components/messages'
import loader from '../components/loader'
import {usecreateOrderMutation} from '../slices/orderApiSlice'
import { clearCartItems } from "../slices/cartSlice"

export default function PlaceOrderScreen() {
    const navigate=useNavigate()
    const cart=useSelector((state)=>state.cart)
    console.log(cart.cartItems)

    useEffect(()=>{
        if(!cart.shippingAddress.address){
            navigate('/shipping')
        }
        else if(!cart.paymentInfo){
            navigate('/payment')
        }
    },[cart.shippingAddress.address,cart.paymentInfo,navigate])//if the follwing values change or get updated this hook will execute
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
                            {cart.cartItems.lenth===0?(
                                <messages>Your Cart is empty</messages>
                            ):(
                                <ListGroup>
                                    {cart.cartItems.map((i,idx)=>(
                                        <ListGroup.Item>
                                            <Row>
                                                <Col key={idx} md={1}><Image src={`src/assets${i.image}`} fluid rounded alt={i.name}/></Col>
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
                            
                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </>
    )
    
}