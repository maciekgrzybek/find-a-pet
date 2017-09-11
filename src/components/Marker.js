import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';

class Marker extends Component {

	render() {
		const markerStyleHover= {
			width: 200
		}
		const style = this.props.$hover || this.props.id === this.props.hover ? markerStyleHover : null;

		return (
			<div
				className="marker"
				style={ style }
				onMouseEnter={() => this.props.hoverAnimal(this.props.id)}
				onMouseLeave={() => this.props.hoverAnimal(null)}>
					<img className="marker__image" src={ this.props.url } alt=""/>
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