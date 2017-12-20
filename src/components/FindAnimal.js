import React, { Component } from 'react';
import MainMap from '../containers/MainMap';
import Cards from '../containers/Cards';
import SearchBar from '../containers/SearchBar';
import Footer from '../components/Footer'

class Home extends Component {

	render() {
		return (
			<div>
				<div className="find-container">
					<div className="grid-container full">
						<div className="grid-x grid-margin-x large-margin-collapse">
							<div className="cell map">
								<MainMap />
							</div>
						</div>
					</div>
					<div className="grid-container">
						<div className="grid-padding-x grid-x">
							<div className="small-12 cell">
								<SearchBar /> 
							</div>
							<div className="small-12 cell">
								<Cards />
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