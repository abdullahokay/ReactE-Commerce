import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { downloadCartItems } from "../../redux/cartReducer";
import { Row } from "react-bootstrap";
import "../../styles/cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    const handleDownloadCartItems = async () => {
        await dispatch(downloadCartItems());
    };
      

    if(products.length === 0) {
        return (
            <div className="cart-is-empty-container">
                <h1> Your Shopping Cart is Empty</h1>
            </div>
        )
    }
    return (
        <>  
            <div className="download-cart-items-btn-wrapper">
                <button className="download-cart-items-btn" onClick={() => handleDownloadCartItems()}><FontAwesomeIcon className="download-cart-items-icon" icon={faDownload}></FontAwesomeIcon></button>
                <br></br>
                <p className="download-cart-items-text">Download Cart Items</p>
            </div>
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
            </div>
        </>
    )
}

export default Cart;