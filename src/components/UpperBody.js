import React from "react";
import productImg1 from "../img/product_1.png";
import "../styles/upper-body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-regular";
import {  faStar } from "@fortawesome/free-solid-svg-icons";

const UpperBody = (props) => {
  const { data } = props
  console.log(props);
  console.log(data);
  return (
    <div className="upper-body-container">
      <div className="p-img-details">
        <div className="p-image-container">
          <p>{data.title}</p>
          <img alt="" src={productImg1}/>
        </div>
        <div className="p-details">
          <div className="p-name-container">
            <p className="p-dt-name">Apple iPhone 13 (128GB)</p>
            <p id="p-detail-1">Free 2 Days Shipping | 1 Year Warranty</p>
          </div>
          <div className="p-evaluation">
            <FontAwesomeIcon
              icon={faStar}
              color="#F2C94C"
              className="evaluation-icon"
            />
            <FontAwesomeIcon
              icon={faStar}
              color="#F2C94C"
              className="evaluation-icon"
            />
            <FontAwesomeIcon
              icon={faStar}
              color="#F2C94C"
              className="evaluation-icon"
            />
            <FontAwesomeIcon
              icon={faStar}
              color="#F2C94C"
              className="evaluation-icon"
            />
            <FontAwesomeIcon
              icon={faStar}
              color="#C4C4C4"
              className="evaluation-icon"
            />
            <p className="p-review-point">4.5</p>
            <p id="p-review-count">from 392 Reviews</p>
          </div>
          <div className="p-price-container">
            <p id="pro-price">$ 580</p>
          </div>
          <div className="p-conditions">
            <ul>
              <div className="p-conditions-detail">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-mark-icon"
                  />
                  Free Return
                </li>
              </div>
              <div className="p-conditions-detail">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-mark-icon"
                  />
                  Chat with us 24 hours
                </li>
              </div>
              <div className="p-conditions-detail">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-mark-icon"
                  />
                  Comes with a Package
                </li>
              </div>
              <div className="p-conditions-detail">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-mark-icon"
                  />
                  Comes with a Package
                </li>
              </div>
            </ul>
          </div>
          <div className="buy-add-btn">
            <button type="submit" id="buy-btn">
              Buy it Now!
            </button>
            <button type="submit" id="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBody;
