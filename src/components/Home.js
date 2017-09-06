import React, { Component } from 'react';
import MainHero from './MainHero';
import MainMap from '../containers/MainMap';
import MainTable from '../containers/MainTable';

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
						<div className="col-md-8 map">
							<MainMap />
						</div>
						<div className="col-md-4 main-table">
							<MainTable />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;