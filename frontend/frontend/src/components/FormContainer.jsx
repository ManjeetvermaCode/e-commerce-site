import {Container,Row, Col} from 'react-bootstrap'

export default function FormContainer({children}){
    return (
        <>
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                    {/* any content placed inside the <FormContainer> tag will get placed here */}
                </Col>
            </Row>
        </Container>
        </>
    )
}