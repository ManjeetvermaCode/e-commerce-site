import { Container,Row,Col } from "react-bootstrap"

export default function Footer(){
    const currentDate=new Date().getFullYear()

    return (
        <footer style={{marginTop:"35%"}}>
            <Container>
                <Row>
                    <Col className="text-center" py-3>
                        <p>E-commerce @copy;{currentDate}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}