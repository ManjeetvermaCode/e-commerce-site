import Header from "./components/header"
import Footer from "./components/footer"
import {Container} from 'react-bootstrap'
import { Outlet } from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Header/>
    <main style={{py:3}}>
      <Container>
        <Outlet/>
         {/*//It acts as a placeholder where the content of the matched child route will be rendered.  */}
      </Container>
    </main>

    <Footer/>
    <ToastContainer/>

    </>
  )
}

export default App
