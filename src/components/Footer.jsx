import { Link } from "react-router-dom";
import footerLogo from "../img/footer-logo.png";
import payments from "../img/Payment.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-divider"></hr>
      <div className="footer-nav-wrapper">
        <div className="footer-logo-container">
        <Link to='/' className="text-link"><img alt="" src={footerLogo}></img></Link>
        </div>
        <div className="footer-section-wrapper">
          <p className="footer-section-title">Account</p>
          <ul>
            <li>Wishlist</li>
            <li>Cart</li>
            <li>Track Order</li>
            <li>Shipping details</li>
          </ul>
        </div>
        <div className="footer-section-wrapper">
          <p className="footer-section-title">Useful Links</p>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Hot Deals</li>
            <li>Promotions</li>
            <li>New Porducts</li>
          </ul>
        </div>
        <div className="footer-section-wrapper">
          <p className="footer-section-title">Help Center</p>
          <ul>
            <li>Payment</li>
            <li>Refund</li>
            <li>Checkout</li>
            <li>Shipping</li>
            <li>Q&A</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider"></hr>
      <div className="band-info">
        <div className="footer-copyright-info">© 2022, All rights reserved</div>
        <img className="payments" alt="" src={payments}></img>
      </div>
    </div>
  );
};

export default Footer;
