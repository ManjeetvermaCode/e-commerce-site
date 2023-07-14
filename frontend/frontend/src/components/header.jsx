import {Nav,Navbar,Container} from 'react-bootstrap';
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'//allow us to have client side links within nav-link.

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/home'>
            <Navbar.Brand>E-commerce site</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                  <Nav.Link>
                    <FaShoppingCart/>Cart
                  </Nav.Link>
              </LinkContainer>
            
            <LinkContainer to='/login'>
            <Nav.Link>
              <FaUser/>Sing In
            </Nav.Link>
            </LinkContainer>
            
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