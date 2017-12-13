import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import TableRow from '../components/TableRow';
import _ from 'lodash';
import FlipMove from 'react-flip-move';
import animalsSelector from '../selectors/animalsSelector';




class MainTable extends Component {



	_renderAnimalTable() {
		return (
			<FlipMove    
				duration={750} easing="ease-out" appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
			{
				_.map(this.props.animals,(animal,key) => {
					return (
						<TableRow animal={animal} key={key} id={key} />
					)})
			}
			</FlipMove>		
		)
	}  
	render() {
		return (
				<div className="main-table">
					{ this._renderAnimalTable() }
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

export default connect(mapStateToProps, { hoverAnimal })(MainTable);