import {Nav,Navbar,Container} from 'react-bootstrap';
import {FaShoppingCart,FaUser} from 'react-icons/fa'

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>E-commerce site</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
            <Nav.Link href='/cart'>
              <FaShoppingCart/>Cart
            </Nav.Link>
            <Nav.Link href='/login'>
              <FaUser/>Sing In
            </Nav.Link>
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