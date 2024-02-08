import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Logo } from "../../assets/icons";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className="Footer" id="footer">
            <div className="videoTag">
            </div>
            <div className="Footer-inner container">

                <div className="Footer-left">
                    <Link to="/"><Logo logoClassName="footerLogo" /></Link>
                    <p className="Footer-text">To enjoy reading books, you don’t need a tablet or e-reader. You can read entire books online, completely legally, in an internet browser on your computer. </p>

                    {/* <div className="Footer-icons">
                        <Link to="https://facebook.com"><FacebookIcon /></Link>
                        <Link to="https://twitter.com"><TwitterIcon /></Link>
                        <Link to="https://linkedin.com"><LinkedinIcon /></Link>
                    </div> */}
                </div>

                <div className="allServices">

                    <ul className="Footer-services">
                        <li className="service-title">Read it Helps</li>
                        <li><Link className="Footer-service" to="/about-us">About Us</Link></li>
                        <li><HashLink className="Footer-service" to="/#services">Services</HashLink></li>
                        <li><Link className="Footer-service" to="/contact">Contact Us</Link></li>
                        <li><Link className="Footer-service" to="/contact">Help Center</Link></li>
                        <li><Link className="Footer-service" to="/about-us">How it Works</Link></li>
                        <li><Link className="Footer-service" to="/">Privacy </Link></li>
                        <li><Link className="Footer-service" to="/">Terms</Link></li>
                    </ul>

                    <div className="Footer-inputSection">
                        <h4 className="service-title">Have any questions ?</h4>
                        <p className="Footer-inputSection-text">Join our mailing list to keep up to date with our latest books and services</p>

                        <div className="inputSection-inputContent">
                            <input className="Footer-inputSection-input" type="text" placeholder="Enter your email address..." />
                            <Link to="/signup" className="btn-secondary">Subscribe Now</Link>
                        </div>

                    </div>
                </div>

            </div>
            <h4 className="copyright container">Copyright © 2023 - 2024 ®. <br></br>All rights reserved</h4>
        </div>
    )
}

export default Footer;
