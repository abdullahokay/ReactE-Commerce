import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/fontawesome-free-regular";
import "../styles/nav-bar.css";
import logo1 from '../img/logo1.png'
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const products = useSelector(state => state.cart.products)
  const subtotal = products.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
  }, 0);

  const handleClickScroll = () => {
    const element = document.getElementById('p-showcase-h');
    if (element) {
      
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Row>
    <div className="navbar-container">
      <div className="navbar-items-wrapper">
        <Col>
          <div className="logo">
            <Link to='/' className="text-link">
              <img alt="asffdfs" src={logo1}></img>
            </Link>
          </div>
        </Col>
        <Col>
          <div className="search-bar">
            <input placeholder="Search for items" type="text" className="search-input" width="549px"></input>
          </div>
        </Col>
        <Col>
          <div className="search-btn">
            <button className="search-button">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="white" size="lg" className="search-icon" />
            </button>
          </div>
        </Col>
        <Col>
          <div className="wish-list">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon"/>
            <p id="wishlist">Wishlist</p>
          </div>
        </Col>
        <Col>
          <div className="cart">
            <Link to='/cart' className="text-link"><FontAwesomeIcon icon={faCartShopping} className="cart-icon"/></Link>
            <div className="cart-exp">
              <p id="my-cart">My Cart</p>
              <p id="cart-total-price">${subtotal.toFixed(2)}</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="browse-all-ctg-btn-container">
            <button className="browse-all-ctg-btn" onClick={() => handleClickScroll()}>Browse Products</button>
          </div>
        </Col>
      </div>
    </div>
    </Row>
  );
};

export default NavBar;
