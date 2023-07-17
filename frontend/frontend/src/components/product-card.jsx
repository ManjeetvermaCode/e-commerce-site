import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
// as we are using client side rendering, while using 'a' tags will result in reloading of the page, therfore we'll use 'Link'.
import Rating from "../rating"
export default function Product({product}){
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top"/>
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div" style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',height:'2.5em'}} >
                        {/* syle sets the tile in ellipsis format. */}
                            <strong >{product.name}</strong>
                        </Card.Title>
                    </Link>

                <Card.Text>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews` }/>
                </Card.Text>

                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            

                </Card.Body>
            </Card>
        </>
    )
}