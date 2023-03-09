import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/home.css";
import homeImage1 from "../../img/Image.png";
import homeImage2 from "../../img/Images.png";
import pImage1 from "../../img/product_1.png";
import pImage2 from "../../img/rec-product-1.png";
import pImage3 from "../../img/rec-product-2.png";
import pImage4 from "../../img/rec-product-3.png";
import pImage5 from "../../img/rec-product-4.png";
import pImage6 from "../../img/rec-product-5.png";
import cImage from "../../img/customer-image.png";
import quoteUp from "../../img/quote-up.png";
import contactUsImage from "../../img/contact-us-image.png"

const Home = () => {
    return (
        <div className="h-container">
            <br></br>
            <br></br>
            <div className="h-title-wrapper">
                <p className="h-title">Amazing goodies for <br></br>your home</p>
                <br></br>
                <br></br>
                <p className="h-exp">We think the chair is the most important piece of furniture in your home. Because if you love <br></br>the chair you are sitting in chances are you will love the rest of the room.</p>
            </div>
            <br></br>
            <br></br>
            <div className="h-picture-wrapper">
                <img src={homeImage1} alt=''></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="h-about-us-wrapper">
                <p className="about-us-title">About us</p>
                <br></br>
                <p className="about-us-exp">Comfort is key and how you feel about your chair will <br></br> affect how you feel and your mood.</p>
                <div className="about-us-info-pic-wrapper">
                    <div className="about-us-info">
                        <div className="info-1-2">
                            <div className="info-1">
                                <p className="info-no">1</p>
                                <p className="info-header">Mission</p>
                                <p className="info-text">It makes people at ease and feel <br></br> like they want to open up.</p>
                            </div>
                            <div className="info-2">
                                <p className="info-no">2</p>
                                <p className="info-header">Motivation</p>
                                <p className="info-text">The perfect mix of art that <br></br> complements the room's style.</p>
                            </div>
                        </div>
                        <div className="info-3-4">
                            <div className="info-3">
                                <p className="info-no">3</p>
                                <p className="info-header">Vision</p>
                                <p className="info-text">Along with a healthy dose of <br></br> negative space to give the eyes <br></br> spots to rest.</p>
                            </div>
                            <div className="info-4">
                                <p className="info-no">4</p>
                                <p className="info-header">Goal</p>
                                <p className="info-text">Art that has meaning to the <br></br> people who live in the space,</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-picture-2-wrapper">
                        <img src={homeImage2} alt=''></img>
                    </div>
                </div>
            </div>
            <div className="h-products-section-wrapper">
                <p className="products-section-header">Products</p>
                <div className="product-categories">
                    <p className="selected-category">All</p>
                    <p className="category-name">Women</p>
                    <p className="category-name">Men</p>
                    <p className="category-name">Technology</p>
                    <p className="category-name">Furniture</p>
                    <p className="category-name">Shoes & Bags</p>
                    <p className="category-name">Sports & Outdoor</p>
                </div>
                <div className="products-showcase-wrapper">
                    <div className="first-row">
                        <Link to={`/product/1`} className="text-link">
                        <div className="p-showcase">
                            <div className="p-image">
                                <img style={{width: 180, height: 180}} alt="" src={pImage1}></img>
                            </div>
                            <p className="p-name">Apple iPhone 13 (128GB)</p>
                            <p className="p-price">$580</p>
                        </div>
                        </Link> 
                        <div style={{marginLeft: 30}} className="p-showcase">
                            <div className="p-image">
                                <img style={{marginLeft: 30, marginBottom: 30}} src={pImage4} alt=''></img>
                            </div>
                            <p className="p-name">Apple Airpods Max</p>
                            <p className="p-price">$199.90</p>
                        </div>
                        <div style={{marginLeft: 30}} className="p-showcase">
                            <div className="p-image">
                                <img style={{marginLeft: 60, marginBottom: 30}} src={pImage5} alt=''></img>
                            </div>
                            <p className="p-name">Apple MFi certified</p>
                            <p className="p-price">9.00$</p>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="p-showcase">
                            <div className="p-image">
                                <img style={{marginLeft: 30, marginBottom: 30}} src={pImage6} alt=''></img>
                            </div>
                            <p className="p-name">Apple Watch Series 6</p>
                            <p className="p-price">$289.90</p>
                        </div>
                        <div style={{marginLeft: 30}} className="p-showcase">
                            <div className="p-image">
                                <img style={{marginLeft: 30, marginBottom: 50}} src={pImage3} alt=''></img>
                            </div>
                            <p className="p-name">Apple Airpods Pro</p>
                            <p className="p-price">$190.00</p>
                        </div>
                        <div style={{marginLeft: 30}} className="p-showcase">
                            <div className="p-image">
                                <img style={{marginLeft: 30, marginBottom: 40}} src={pImage2} alt=''></img>
                            </div>
                            <p className="p-name">iPhone 12 charger</p>
                            <p className="p-price">$13.90</p>
                        </div>
                    </div>
                </div>
                <div className="customer-rec-section-wrapper">
                    <p className="c-section-title">What do customers say..</p>
                    <div className="c-rec-and-image-wrapper">
                        <div className="c-image-wrapper">
                            <img alt="" src={cImage}></img>
                        </div>
                        <div className="c-rec-wrapper">
                            <img alt="" src={quoteUp}></img>
                            <p className="c-rec-header">Amazing service</p>
                            <p className="c-rec-text">Since the online marketplace can be a scary place, the <br></br> presence of customer reviews on an online store helps <br></br> establish authenticity, confidence, and trust among <br></br> shoppers.</p>
                            <p className="c-name">Wade Warren</p>
                            <p className="c-job">Doctor</p>
                        </div>
                    </div>
                </div>
                <div className="contact-us-section-wrapper">
                    <div className="contact-us-img-and-area-wrapper">
                        <div className="contact-us-img-container">
                            <img alt="" src={contactUsImage}></img>
                        </div>
                        <div className="contact-us-area-container">
                            <div className="contact-us-title-and-text-wrapper">
                                <p className="contact-us-title">Contact Us</p>
                                <p className="contact-us-text">Our team would love to hear from you!</p>
                            </div>
                            <div className="contact-us-form">
                                <div className="form-name-surname">
                                    <textarea style={{marginRight: 31}} className="form-name-surname-textarea" placeholder="First name"></textarea>
                                    <textarea className="form-name-surname-textarea" placeholder="Last name"></textarea>
                                </div>
                                <div className="form-email">
                                    <textarea className="form-email-textarea" placeholder="Email address"></textarea>
                                </div>
                                <div className="form-message">
                                    <textarea className="form-message-textarea" placeholder="Message"></textarea>
                                </div>
                                <div className="form-send-message-btn-wrapper">
                                    <button className="form-send-message-btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;