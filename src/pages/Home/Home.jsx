import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import  "../../styles/home.css";
import homeImage1 from "../../img/Image.png";
import homeImage2 from "../../img/Images.png";
import cImage from "../../img/customer-image.png";
import quoteUp from "../../img/quote-up.png";
import contactUsImage from "../../img/contact-us-image.png"
import Loading from "../../components/Loading";

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/`, {})
            .then((res) => res.json())
            .then((response) => {
            setData(response.products);
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
    },[]);

    if (isLoading) {
        return <Loading/>;
    }

    return (
        
        <div className="home-container">
                    <br></br>
                    <br></br>
                    <div className="home-title-wrapper">
                        <p className="home-title">Amazing goodies for <br></br>your home</p>
                        <br></br>
                        <br></br>
                        <p className="home-exp">We think the chair is the most important piece of furniture in your home. Because if you love <br></br>the chair you are sitting in chances are you will love the rest of the room.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="home-picture-wrapper">
                        <img src={homeImage1} alt=''></img>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="home-about-us-wrapper">
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
                            <div className="home-picture-2-wrapper">
                                <img src={homeImage2} alt=''></img>
                            </div>
                        </div>
                    </div>
                    <div className="home-products-section-wrapper">
                        <p className="products-section-header" id="p-showcase-h" style={{marginBottom: 40 + "px"}}>Products</p>
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
                                {!isLoading && data.length >= 6 && (
                                    data.slice(0,3).map(product =>(
                                        <Link to={`/product/${product.id}`} key={product.id} className="text-link">
                                            <div className="p-showcase">
                                                <div className="p-image">
                                                    <img style={{width: 180, height: 180}} alt="" src={product.thumbnail}></img>
                                                </div>
                                                <p className="p-name">{product.title}</p>
                                                <p className="p-price">${product.price}</p>
                                            </div>
                                        </Link>
                                )))}
                            </div>
                            <div className="second-row">
                                {!isLoading && data.length >= 6 && (
                                    data.slice(3,6).map(product =>(
                                        <Link to={`/product/${product.id}`} key={product.id} className="text-link">
                                            <div className="p-showcase">
                                                <div className="p-image">
                                                    <img style={{width: 180, height: 180}} alt="" src={product.thumbnail}></img>
                                                </div>
                                                <p className="p-name">{product.title}</p>
                                                <p className="p-price">${product.price}</p>
                                            </div>
                                        </Link>
                                )))}                               
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