import React, { Component } from 'react';
import MainHero from './MainHero';
import MainMap from '../containers/MainMap';
import MainTable from '../containers/MainTable';
import SearchBar from '../containers/SearchBar';

class Home extends Component {

	render() {
		return (
			<div>
				<MainHero />
				<div className="grid-container">
					<div className="grid-x grid-padding-x">
						<div className="small-12 cell map">
							<MainMap />
						</div>
						<div className="small-12 cell">
						 	<SearchBar /> 
							<MainTable />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;