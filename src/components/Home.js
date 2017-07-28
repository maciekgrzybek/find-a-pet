import React, { Component } from 'react';
import MainMap from '../containers/MainMap';

class Home extends Component {

	render() {
		return (
			<div className="row">
				<div className="col-md-12" style={{width: '100%', height: '400px'}}>
					<MainMap />
				</div>
			</div>	
		);
	}
}

export default Home;