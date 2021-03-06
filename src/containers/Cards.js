import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import Card from './Card';
import _ from 'lodash';
import FlipMove from 'react-flip-move';
import animalsSelector from '../selectors/animalsSelector';




class Cards extends Component {



	_renderCards() {
		return (
			
				<FlipMove    
					duration={750} easing="ease-out" appearAnimation="elevator" enterAnimation="elevator" leaveAnimation="elevator" className="grid-x grid-padding-x">
					{/* <div className="grid-x grid-padding-x"> */}
						{
							_.map(this.props.animals,(animal,key) => {
								return (
										<div className="small-12 medium-6 large-4 cell" key={animal.id}>
											<Card animal={animal} />
										</div>
								)})
						}
						{/* </div> */}
				</FlipMove>		

		)
	}  
	render() {
		return (
				<div className="cards-container">
						{ this._renderCards() }
				</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: animalsSelector(state),
		hover: state.hover,
	}
}

export default connect(mapStateToProps, { hoverAnimal })(Cards);