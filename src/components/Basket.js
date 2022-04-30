import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TotalAmount = ({ cartItems }) => {

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = cartItems.length === 0 ? 0 : (itemsPrice > 100 ? 0 : 20);
    const totalPrice = itemsPrice + shippingPrice;
    console.log('cartItems', cartItems.length);
    return (
        <Row>
            <Card className='shadow'>
                <Container className='py-4'>

                <Card.Title>The total amount of</Card.Title>
                    <Row>
                        <Col xs={12} md={8}>Temporary amount</Col>
                        <Col xs={6} md={4}>{itemsPrice.toFixed(2)}</Col>
                    </Row>        
                    <Row>
                        <Col xs={12} md={8}>Shipping</Col>
                        <Col xs={6} md={4}>{shippingPrice}</Col>
                    </Row>        
                    <hr />
                    <Row>
                        <Col xs={12} md={8}>The total amount of (including VAT)</Col>
                        <Col xs={6} md={4}>{totalPrice.toFixed(2)}</Col>
                    </Row>
                    <Button variant='primary' className='mt-3 mb-1' style={{width: '100%'}}>GO TO CHECKOUT</Button>
                </Container>
            </Card>
        </Row>
    )
}

export default TotalAmount;