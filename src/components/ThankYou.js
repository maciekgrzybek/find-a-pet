import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThankYou extends Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						Dzieki za dodanie ogloszenia!
						<Link to="/" className="btn">Wroc do strony glownej</Link>	
					</div>
				</div>
			</div>
		);
	}
}

export default ThankYou;