import React, { Component } from 'react';
import MainHero from './MainHero';
import MainMap from '../containers/MainMap';
import MainTable from '../containers/MainTable';
import SearchBar from '../containers/SearchBar';
import Footer from '../components/Footer'

class Home extends Component {

	render() {
		return (
			<div>
				<MainHero />
				<div className="home-container">
					<div className="grid-container full">
						<div className="grid-x grid-margin-x large-margin-collapse">
							<div className="small-12 large-7 cell map">
								<MainMap />
							</div>
							<div className="small-12 large-5 cell">
							 	<SearchBar /> 
								<MainTable />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;