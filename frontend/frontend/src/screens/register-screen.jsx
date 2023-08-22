import {Form,Button,Row,Col} from 'react-bootstrap'
import { useState,useEffect } from 'react'
import {Link,useLocation,useNavigate,useNavigation} from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { useSelector,useDispatch } from 'react-redux'
import { useRegisterMutation } from '../slices/loginApiSlice'
import { setCredentials } from '../slices/authSlice'
import Loader from '../components/loader'
import { toast } from 'react-toastify'


export default function RegisterScreen() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')


    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [register,{isLoading}]=useRegisterMutation()//it return an array, The first element, login, is a function that you can call to initiate the mutation.

    const {userInfo}=useSelector((state)=>state.auth)//retriveing userId field for auth state

    const {search} =useLocation()//use location gives us info about url. select property of useLocation()  refers to the query parameters present in the current URL
    const sp=new URLSearchParams(search) //storing query parameter in search params. qp is the key-value pain in url.
    const redirect=sp.get('redirect')||'/'//if redirect key found store it in the variable else store '/'

    useEffect((userInfo)=>{
        if(userInfo){
            navigate(redirect)
        }
    },[userInfo,navigate,redirect])//trigger whenever these 3 values will change.

    const submitHandler=async(e)=>{
        e.preventDefault()
        if(password===confirmpassword){
            try {
                const res=await register({name,email,password}).unwrap()//unwrap() if api call is successfull it extract and return the payload
                dispatch(setCredentials({res})) //the reson we are passing an object is becouse it is a object {res}
                navigate(redirect)
                console.log('it worked')
                
            } catch (err) {
                toast.error(err.data)            
            }
        }else{
            toast.error('Passwords do not match')
        }
    }
    return(
        <>

           <FormContainer className='my-3'>

            <h3 className='my-1'>Sign Up</h3>
           <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label className='my-3'>Enter Name</Form.Label>
                    <Form.Control value={name} onChange={(e)=>setname(e.target.value)} placeholder='Email' type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='my-3'>Enter Email</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' type='email'></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='my-3'>Enter Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' type='password'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='my-3'>Confirm Password</Form.Label>
                    <Form.Control value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} placeholder='Password' type='password'></Form.Control>
                </Form.Group>

                <Button type='submit' disabled={isLoading} variant='dark' className='my-3'>Register</Button>
                {isLoading && <Loader/>}
            </Form>
            <Row className='my-3'>
                <Col>
                    Already have an account? <Link to={redirect?`/login?redirect=${redirect}`:'/login'}>Login</Link>
                </Col>
            </Row>
           </FormContainer>
        </>
    )
}