import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart, decrementProduct, removeItem } from "../../redux/cartReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const CartItem = (props) => {
  const { product } = props;
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      img: product.thumbnail,
      price: product.price,
      brand: product.brand,
      description: product.description,
      quantity: 1,
    }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(product.id))
  };

  const handleDecrement = () => {
      dispatch(decrementProduct(product.id));
  };

  return (
    <>
      <Row className="cart-item-container">
        <Col style={{paddingLeft: 0, paddingRight: 0}} md={3} className="cart-item-img-col">
          <div className="cart-item-img-container">
            <img alt='' src={product.img} style={{width: 180, height: 180}}/>
          </div>
        </Col>
        <Col style={{paddingLeft: 0, paddingRight: 0}} md={7} className="cart-item-info-col">
          <div className="cart-item-info-container">
            <p style={{marginBottom: 10}}className="cart-item-title">
              <b>{product.title}</b>
            </p>
            <p style={{marginBottom: 10}} className="cart-item-brand">
              Brand: <b>{product.brand}</b>
            </p>
            <p style={{marginBottom: 10}} className="cart-item-description">
              {product.description}
            </p>
            <p>${product.price}</p>
          </div>
        </Col>
        <Col style={{paddingLeft: 0, paddingRight: 0}} md={2}>
        <div className="count-handler">
            <button className="cart-counter-btn" type="submit" onClick={() => handleDecrement()}> <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> </button>
            <p className="product-quantity">{product.quantity}</p>
            <button className="cart-counter-btn" type="submit" onClick={() => handleAddToCart()}> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> </button>
            <button className="remove-product-btn" onClick={() => handleRemoveItem()}><FontAwesomeIcon icon={faTrash} color="red" className="remove-product-icon"/></button>
        </div>
        </Col>
      </Row>
   </>
  );
};