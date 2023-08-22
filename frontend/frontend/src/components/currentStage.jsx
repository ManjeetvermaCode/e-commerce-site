import {Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Stage({step1,step2,step3,step4}) {
    return (
        <Nav className='justify-content-align-center mb-4'>
        <Nav.Item>
            {step1?(
                <LinkContainer to='/login'>
                    <Nav.Link style={{fontSize:'4rem'}}>Sign In</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>SignIn</Nav.Link>
            )}
        </Nav.Item>
        <Nav.Item>
            {step2?(
                <LinkContainer to='/shipping'>
                    <Nav.Link style={{fontSize:'4rem'}}>Shipping</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>Shipping Page</Nav.Link>
            )}
        </Nav.Item>
        <Nav.Item>
            {step3?(
                <LinkContainer to='/payment'>
                    <Nav.Link style={{fontSize:'4rem'}}>Payment</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>Payment</Nav.Link>
            )}
        </Nav.Item>
        <Nav.Item>
            {step4?(
                <LinkContainer to='/confirmorder'>
                    <Nav.Link style={{fontSize:'4rem'}}>Confirm Order</Nav.Link>
                </LinkContainer>
            ):(
                <Nav.Link disabled>Confirm Order</Nav.Link>
            )}
        </Nav.Item>
    </Nav>
    )
}