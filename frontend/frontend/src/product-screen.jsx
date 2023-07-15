import {useParams} from 'react-router-dom'
import products from './products'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap'
import Rating from './rating'

export default function ProductScreen(){
    const {id}=useParams()
    const product=products.find(p=>p._id===id)
    

    return (
        <>
           <Button className="btn, btn-dark my-3" to="/">
                Go Back
           </Button>

            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                    {/*fluid makes the image responsive */}
                </Col>
                <Col md={4}>
                <ListGroup variant='flush'>
                    {/*flush - removes outer border and spacing */}
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>{product.description}</p>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                            <Row>
                                <Col>price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row> 
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    <strong>{product.countInStock==0?'Out of stock':'In Stock'}</strong>
                                </Col>
                            </Row> 
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className='btn-block btn-dark'
                                    type='button'
                                    disabled={product.countInStock<=0}
                                >Add to Cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>
    )
}