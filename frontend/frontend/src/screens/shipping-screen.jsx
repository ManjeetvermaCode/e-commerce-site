import { useState } from "react";
import FormContainer from "../components/FormContainer";
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveAddress } from "../slices/cartSlice";

export default function ShippingScreen() {
    const cart=useSelector((state)=>state.cart)
    const {shippingAddress}=cart

    const [address,setAddress]=useState(shippingAddress.address || '')
    const [city,setCity]=useState(shippingAddress.city || '')
    const [postalCode,setpostalCode]=useState(shippingAddress.postalCode || '')
    const [country,setCountry]=useState(shippingAddress.country || '')

    const dispatch=useDispatch()
    const navigate=useNavigate()

   

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('shipping page')
        dispatch(saveAddress({address,city,postalCode,country}))
        navigate('/payment')

    }

    return <FormContainer>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="address" className="my-2">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="city" className="my-2">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={city} onChange={(e)=>setCity(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="postalCode" className="my-2">
                <Form.Label>PostalCode</Form.Label>
                <Form.Control type="text" value={postalCode} onChange={(e)=>setpostalCode(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="country" className="my-2">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type="submit" className="my-2" color="secondary">Submit</Button>
        </Form>
    </FormContainer>
}