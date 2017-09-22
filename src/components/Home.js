import React, { Component } from 'react';
import MainHero from './MainHero';
import MainMap from '../containers/MainMap';
import MainTable from '../containers/MainTable';
import SearchBar from '../containers/SearchBar';

class Home extends Component {

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<MainHero />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-8 map">
						<MainMap />
					</div>
					<div className="col-xs-12 col-sm-4 main-table">
						<SearchBar />
						<MainTable />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;