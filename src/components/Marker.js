import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import Icon from './Icon';



class Marker extends Component {

	render() {
		const markerStyleHover= {
			top: '-55px'
		}
		const style = this.props.$hover || this.props.id === this.props.hover ? markerStyleHover : null;

		return (
			<div
				className="marker"
				style={ style }
				onMouseEnter={() => this.props.$hover ? this.props.hoverAnimal(this.props.id) : null}
				onMouseLeave={() => this.props.$hover ? this.props.hoverAnimal(null) : null}>
					<Icon />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		hover: state.hover
	}
}

export default connect(mapStateToProps, { hoverAnimal })(Marker);