import {Badge,Nav,Navbar,Container, NavDropdown} from 'react-bootstrap';
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'//allow us to have client side links within nav-link.
import { useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/loginApiSlice';
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const {cartItems}=useSelector((state)=>state.cart)
  const {userInfo}=useSelector((state)=>state.auth)

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [logoutApiCall]=useLogoutMutation()//we can name it whatever we want

  const logoutHandler=async()=>{
    try {
      console.log('handler clicked')
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >E-commerce site</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                  <Nav.Link>
                  
                    <FaShoppingCart/>Cart
                    {
                      cartItems.length>0 && (
                        <Badge pill bg='info' style={{marginLeft:'5px'}}>
                          {cartItems.reduce((a,c)=>a+c.qty,0)}
                          
                        </Badge>
                      )
                    }
                  </Nav.Link>
              </LinkContainer>
            {userInfo?(
              <NavDropdown title={userInfo.res.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ):(
              <LinkContainer to='/login'>
              <Nav.Link>
                <FaUser/>Sing In
              </Nav.Link>
              </LinkContainer>
            )}
            
            
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      
    </>
  );
}

export default Header;

// <Nav className="justify-content-center" activeKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>