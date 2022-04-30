// import { Container, Row, Col } from 'bootstrap';
import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListCart from './ListCart';
import Basket from './Basket';
import { connect } from 'react-redux';

const ShoppingCart = (props) => {
    // const { name, type, color, size } = props;
    const { Products } = props.data;
    const [products, setProducts] = useState(Products);
    const [cartItems, setCartItems] = useState([]);

    const onCountChange = (product, count) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: count } : x
            )
        );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const onRemoveProduct = (product) => {
        setProducts(products.filter((x) => x.id !== product.id));
    };

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={8} className='py-4'>
                        <ListCart 
                            products={products}
                            onCountChange={onCountChange}
                            onRemoveProduct={onRemoveProduct}
                        />
                    </Col>
                    <Col xs={6} md={4} className='py-4'>
                        <Basket cartItems={cartItems} />
                    </Col>
                </Row>
            </Container>
            <style>{`
                Shopping__cartImg {
                    width: 100px;
                    height: 100px;
                }
                .btn {
                    font-size: 12px !important;
                }
            `}</style>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCountChange: () => dispatch({type: 'COUNT_CHANGE'}),
        onRemoveProduct: () => dispatch({type: 'REMOVE_PRD'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);