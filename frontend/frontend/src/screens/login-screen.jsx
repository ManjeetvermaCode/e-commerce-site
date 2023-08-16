import {Form,Button,Row,Col} from 'react-bootstrap'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import FormContainer from '../components/FormContainer'

export default function LoginScreen() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('submitted')
    }
    return(
        <>

           <FormContainer className='my-2'>

           <div>Login Screen</div>

           <Form>
            <Form.Group>
                    <Form.Label className='my-3'>Enter Email</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' type='email'></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='my-3'>Enter Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' type='password'></Form.Control>
                </Form.Group>

                <Button type='button' variant='primary' className='my-3'>Sign In</Button>
                
            </Form>
            <Row className='my-3'>
                <Col>
                    newCustomer?<Link to="/register">Register</Link>
                </Col>
            </Row>
           </FormContainer>
        </>
    )
}