import React from 'react';

import "./MakeEvent.scss";

const MakeEvent = () => {
	return (
		<div className="MakeEvent">
			<div className="MakeEvent-inner container">

				{/* <div className="MakeEvent-content"> */}
					<h3 className="MakeEvent-title">Live discussion groups</h3>
					<p className="MakeEvent-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

					<div className="MakeEvent-group">
						<h4>Club of book lovers</h4>
						<button className="btn-secondary">Join</button>
					</div>

					<div className="MakeEvent-group">
						<h4>Discussion group</h4>
						<button className="btn-secondary">Join</button>
					</div>

					<div className="MakeEvent-group">
						<h4>Writing and reading club</h4>
						<button className="btn-secondary">Join</button>
					</div>
					
					{/* <button className="btn-secondary">Create Events</button> */}
				{/* </div> */}
				{/* <img src={MakeEventImg} alt="" /> */}
			</div>
		</div>
	)
}

export default MakeEvent;