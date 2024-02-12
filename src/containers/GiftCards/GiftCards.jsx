import React from 'react';
import GiftCard1 from "../../assets/images/giftCard1.png";
import GiftCard2 from "../../assets/images/giftCard2.webp";
import GiftCard3 from "../../assets/images/giftCard3.png";

import "./GiftCards.scss";

const GiftCards = () => {
	return (
		<div className="GiftCards">
			<h2 className="Blog-title">Gift cards</h2>

			<div className="cards">
				<img src={GiftCard1} alt="" />
				<img src={GiftCard2} alt="" />
				<img src={GiftCard3} alt="" />
			</div>
			
		</div>
	);
}

export default GiftCards;