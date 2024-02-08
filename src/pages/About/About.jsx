import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import barry from "../../assets/images/barry.png"

import "./About.scss";

const About = () => {
	return (
		<div className="About">
			<Header />
			<div className="About-inner container">
				{/* <h3 className="About-title">Welcome to Party Time Events</h3> */}

				<div style={{ display: "flex" }}>
					{/* <img style={{width: "50%"}} src={barry} alt="" /> */}
					<p className="About-text">
						"Read it" was established in 2004 with the vision to provide an extensive library of books in digital format for free on the Internet. Many of the early eBooks are from the Project Gutenberg archives, which means you will be able to find a lot of classics on the site.

						Over a decade later, we are still going strong in our mission to provide a valuable service to our readers. "Read it" has grown into a platform where self-publishing authors have the opportunity to introduce their work to our community and new books are uploaded to our site daily - provided they comply to our quality standards.

						In our daily newsletter, we keep our rapidly growing list of active subscribers up to date on the latest free and discounted eBooks that are available online. We always love to hear from our visitors, so if you have any questions or feedback, don't hesitate to contact our editor lisa.clifford@manybooks.net.
					</p>
				</div>

				{/* <div className="aboutCard-section">
					<div className="aboutCard-section-left">
						<h4 className="aboutCard-section-title">Interested in our services?</h4>
						<h4 className="aboutCard-section-title2">We’re here to help!</h4>
					</div>

					<div className="aboutCard-section-right">
						<p className="aboutCard-section-text">
							We want to know your needs exactly so that we can provide the perfect solution. Let us know what you want and we’ll do our best to help. We are laid back and happy to speak with you on the phone or by email.
						</p>
						<Link className="btn-secondary" to="/#subscribes">GET PRICING</Link>
					</div>
				</div> */}
			</div>
			<Footer />
		</div>
	)
}

export default About;