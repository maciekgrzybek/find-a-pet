import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';



class TableRow extends Component {


	render() {
		const tableRowStyleHover= {
			color: 'red',
			background: 'yellow'
		}
		const tableRowStyle= {
			color: 'green'
		}

		const style = this.props.id === this.props.hover ? tableRowStyleHover : tableRowStyle;
		return (
			<li
				style={ style }
				onMouseEnter={() => this.props.hoverAnimal(this.props.id)}
				onMouseLeave={() => this.props.hoverAnimal(null)}>
					{this.props.id} - kej
			</li>
		)
	}
}

function mapStateToProps(state) {
	return {
		hover: state.hover
	}
}

export default connect(mapStateToProps, { hoverAnimal })(TableRow);