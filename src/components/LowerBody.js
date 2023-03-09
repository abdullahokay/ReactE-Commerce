import "../styles/lower-body.css";
import productDetailImg from "../img/image-15-enlarged.png";
import recProductImg1 from "../img/rec-product-1.png";
import recProductImg2 from "../img/rec-product-2.png";
import recProductImg3 from "../img/rec-product-3.png";
import recProductImg4 from "../img/rec-product-4.png";
import recProductImg5 from "../img/rec-product-5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const LowerBody = (props) => {
  return (
    <div className="lower-body-container">
      <div className="product-nav-container">
        <p className="about">About</p>
        <p className="shipping">Shipping</p>
        <p className="reviews">Reviews</p>
        <p className="returns">Returns</p>
      </div>
      <div className="product-details">
        <div className="product-img-container">
          <img alt="" src={productDetailImg}></img>
        </div>
        <ul className="product-explanation">
          <li>15 cm (6.1-inch) Super Retina XDR display</li>
          <li>
            Cinematic mode adds shallow depth of field and shifts focus
            automatically in your videos
          </li>
          <li>
            Advanced dual-camera system with 12MP Wide and Ultra Wide cameras;
            Photographic Styles, Smart HDR 4,<br></br> Night mode, 4K Dolby
            Vision HDR recording
          </li>
          <li>
            12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
            recording
          </li>
          <li>A15 Bionic chip for lightning-fast performance</li>
          <li>Up to 19 hours of video playback</li>
          <li>Durable design with Ceramic Shield</li>
          <li>Industry-leading IP68 water resistance</li>
          <li>
            iOS 15 packs new features to do more with iPhone than ever before
          </li>
          <li>
            Supports MagSafe accessories for easy attachment and faster wireless
            charging
          </li>
        </ul>
      </div>
      <p id="sponsored-items-header">Similar Sponsored Items</p>
      <div className="sponsored-items-container">
        <div className="rec-product-container">
          <div className="rec-product-img-container">
            <img alt="" src={recProductImg1}></img>
          </div>
          <div className="rec-product-info">
            <p className="rec-product-name">iPhone 12 charger</p>
            <p className="rec-product-brand">Apple</p>
            <div className="rec-product-price-and-review">
              <p className="rec-product-price">13.90$</p>
              <FontAwesomeIcon
                icon={faStar}
                color="#F2C94C"
                className="rec-product-evaluation-icon"
              />
              <p className="review-point">4.5</p>
            </div>
          </div>
        </div>
        <div className="rec-product-container">
          <div className="rec-product-img-container">
            <img alt="" src={recProductImg2}></img>
          </div>
          <div className="rec-product-info">
            <p className="rec-product-name">Apple Airpods Pro</p>
            <p className="rec-product-brand">Apple</p>
            <div className="rec-product-price-and-review">
              <p className="rec-product-price">190.00$</p>
              <FontAwesomeIcon
                icon={faStar}
                color="#F2C94C"
                className="rec-product-evaluation-icon"
              />
              <p className="review-point">4.8</p>
            </div>
          </div>
        </div>
        <div className="rec-product-container">
          <div className="rec-product-img-container">
            <img alt="" src={recProductImg3}></img>
          </div>
          <div className="rec-product-info">
            <p className="rec-product-name">Apple Airpods Max</p>
            <p className="rec-product-brand">Apple</p>
            <div className="rec-product-price-and-review">
              <p className="rec-product-price">199.90$</p>
              <FontAwesomeIcon
                icon={faStar}
                color="#F2C94C"
                className="rec-product-evaluation-icon"
              />
              <p className="review-point">4.9</p>
            </div>
          </div>
        </div>
        <div className="rec-product-container">
          <div className="rec-product-img-container">
            <img alt="" src={recProductImg4}></img>
          </div>
          <div className="rec-product-info">
            <p className="rec-product-name">Apple MFi certified</p>
            <p className="rec-product-brand">Apple</p>
            <div className="rec-product-price-and-review">
              <p className="rec-product-price">9.00$</p>
              <FontAwesomeIcon
                icon={faStar}
                color="#F2C94C"
                className="rec-product-evaluation-icon"
              />
              <p className="review-point">4.2</p>
            </div>
          </div>
        </div>
        <div className="rec-product-container">
          <div className="rec-product-img-container">
            <img alt="" src={recProductImg5}></img>
          </div>
          <div className="rec-product-info">
            <p className="rec-product-name">Apple Watch Series 6</p>
            <p className="rec-product-brand">Apple</p>
            <div className="rec-product-price-and-review">
              <p className="rec-product-price">289.90$</p>
              <FontAwesomeIcon
                icon={faStar}
                color="#F2C94C"
                className="rec-product-evaluation-icon"
              />
              <p className="review-point">4.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerBody;
