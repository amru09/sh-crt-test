import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterInput from "react-counter-input";

const ListCart = (props) => {
    const { products, onCountChange, onRemoveProduct, onMoveToWishlist } = props;
    
    return (
        <Card className='shadow'>
            <Container className='py-4'>
                <Card.Title>Cart (2 Items) </Card.Title>

                {products.map((product, index) => {

                    return (
                        <>
                        <Row key={index} className="d-flex  pt-4">
                            <Col className="col flex-shrink-0 m-auto">
                                <img src={product.image} className='rounded shadow Shopping__cartImg' style={{ maxWidth: 150, maxHeight: 150}} />
                            </Col>
                            <Col className="col-6 d-flex flex-column justify-content-between">
                                <div className="fw-bold">{product.name}</div>
                                <div className=''>{`${product.type} - ${product.color}`}</div>
                                <div className=''>{`Color - ${product.color}`}</div>
                                <div className=''>{`Size - ${product.size}`}</div>
                                <div className='d-flex gap-2 '>
                                    <button className='btn' onClick={onRemoveProduct}>
                                        Remove Item
                                    </button> 
                                    <button className='btn' onClick={onMoveToWishlist}>
                                        Move to wishlist
                                    </button>
                                </div>
                            </Col>
                            <Col style={{padding: 'unset !important'}} className="col flex-grow-1 d-flex justify-content-between flex-column align-items-end">
                                <CounterInput 
                                    min={0}
                                    max={1000}
                                    onCountChange={count => onCountChange(product, count) }
                                />
                                <div className='fw-bold'>
                                    {`$ ${product.price}`}
                                </div>
                            </Col>
                        </Row>
                        <hr />  
                        </>  
                    )
                })}
            </Container>
        </Card>
    )
}

export default ListCart;