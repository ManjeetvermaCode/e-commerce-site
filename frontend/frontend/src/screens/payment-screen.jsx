import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Col,Form,Button } from "react-bootstrap";
import FormContainer from '../components/FormContainer'
import CurrentStage from '../components/currentStage'
import { savePaymentMethod } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function PaymentScreen() {
    const [paymentMethod,setpaymentMethod]=useState('paypal')

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const cart=useSelector((state)=>state.cart)
    const {shippingAddress}=cart

    useEffect(()=>{
        if(!shippingAddress){
            navigate('/shipping')
        }
    },[shippingAddress,navigate])

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return(
        <FormContainer>
            <CurrentStage step1 step2 step3/>
            <h1>Payment Method</h1>


          <Form onSubmit={handleSubmit}>
          <Form.Group>
           <Form.Label as='legend'>Select Method</Form.Label>

           <Col>
              <Form.Check
                type='radio'
                className='my=2'
                label='Paypal or Credit Card'
                id='paypal'
                name='paymentMethod'
                value='Paypal'
                checked
                onChange={(e)=>setpaymentMethod(e.target.value)}
            ></Form.Check>
            </Col>

           </Form.Group>
           <Button style={{marginTop:'10px'}} type='submit' variant="secondary">Continue</Button>

          </Form>
        </FormContainer>
    )
}