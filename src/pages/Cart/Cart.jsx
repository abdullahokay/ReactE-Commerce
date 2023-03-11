import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { Row } from "react-bootstrap";
import "../../styles/cart.css"

const Cart = () => {
    const products = useSelector(state => state.cart.products)

    if(products.length === 0) {
        return (
            <div className="cart-is-empty-container">
                <h1> Your Shopping Cart is Empty</h1>
            </div>
        )
    }
    return (
        <>
            <div className="cart-container">
                    <div className="products-in-cart-container">
                        <Row style={{paddingLeft: 0, paddingRight: 0}}>
                            {products.map((product) => (
                                <div className="cart-products-column" style={{paddingLeft: 0, paddingRight: 0}} key={product.id}>
                                    <CartItem product = {product} />
                                </div>
                            ))}
                        </Row>
                    </div>
                {/* <div className="subtotal">
                    <p></p>
                </div> */}
            </div>
        </>
    )
}

export default Cart;