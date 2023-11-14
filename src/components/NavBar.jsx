import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/fontawesome-free-regular";
import "../styles/nav-bar.css";
import logo1 from "../img/logo1.png";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const products = useSelector((state) => state.cart.products);
  const subtotal = products.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const handleClickScroll = () => {
    const element = document.getElementById("p-showcase-h");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <Row>
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
    </Row> */}
      <Navbar bg="light" expand="lg" id="navbar">
        <Container className="justify-content-space-between">
          <Navbar.Brand>
            <div className="logo">
              <Link to="/" className="text-link">
                <img alt="asffdfs" src={logo1}></img>
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-5">
              <Nav className="me-5">
                <Form className="d-flex">
                  <div className="search-bar">
                    <input
                      placeholder="Search for items"
                      type="text"
                      className="search-input"
                      width="549px"
                    ></input>
                  </div>
                  <Button variant="outline-success" className="search-button">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      color="white"
                      size="lg"
                      className="search-icon"
                    />
                  </Button>
                </Form>
              </Nav>
            </Nav>
            <Nav>
              <Nav className="me-5">
                <div className="wish-list">
                  <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
                  <p id="wishlist">Wishlist</p>
                </div>
              </Nav>
              <Nav className="me-5">
                <div className="cart">
                  <Link to="/cart" className="text-link">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cart-icon"
                    />
                  </Link>
                  <div className="cart-exp">
                    <p id="my-cart">My Cart</p>
                    <p id="cart-total-price">${subtotal.toFixed(2)}</p>
                  </div>
                </div>
              </Nav>
              <Nav className="justify-content-end">
                <div className="browse-all-ctg-btn-container">
                  <button
                    className="browse-all-ctg-btn"
                    onClick={() => handleClickScroll()}
                  >
                    Browse Products{" "}
                    <FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
                  </button>
                </div>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
