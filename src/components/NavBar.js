import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/fontawesome-free-regular";
import "../styles/nav-bar.css";
import logo1 from '../img/logo1.png'

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to='/' className="text-link">
          <img alt="asffdfs" src={logo1}></img>
        </Link>
      </div>
      <div className="search-bar">
        <input placeholder="Search for items" type="text" className="search-input" width="549px"></input>
        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="white" size="lg" className="search-icon" />
        </button>
      </div>
      <div className="wish-list">
        <FontAwesomeIcon icon={faHeart} className="wishlist-icon"/>
        <p id="wishlist">Wishlist</p>
      </div>
      <div className="cart">
        <Link to='/cart' className="text-link"><FontAwesomeIcon icon={faCartShopping} className="cart-icon"/></Link>
        <div className="cart-exp">
          <p id="my-cart">My Cart</p>
          <p id="cart-total-price">$45</p>
        </div>
      </div>
      <div className="browse-all-ctg-btn-container">
        <button className="browse-all-ctg-btn">Browse Products</button>
      </div>
    </div>
  );
};

export default NavBar;
