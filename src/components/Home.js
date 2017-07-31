import React, { Component } from 'react';
import MainHero from './MainHero';
import MainMap from '../containers/MainMap';

class Home extends Component {

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<MainHero />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12 map">
							<MainMap />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;