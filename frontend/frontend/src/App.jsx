import Header from "./components/header"
import Footer from "./components/footer"
import HomeScreen from "./screen"
import {Container} from 'react-bootstrap'
function App() {

  return (
    <>
    <Header/>
    <main style={{py:3}}>
      <Container>
        <HomeScreen/>
      </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App
