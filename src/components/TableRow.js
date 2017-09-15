import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';



class TableRow extends Component {


	render() {

		// const tableRowStyleHover= {
		// 	color: 'red',
		// 	background: 'yellow'
		// }
		// const tableRowStyle= {
		// 	color: 'green'
		// }

		// const style = this.props.id === this.props.hover ? tableRowStyleHover : tableRowStyle;
		const { animal } = this.props;
		return (
			<li
				className="test"
				style={ this.props.style }
				onMouseEnter={() => this.props.hoverAnimal(this.props.id)}
				onMouseLeave={() => this.props.hoverAnimal(null)}>
					<img
						className="table__image"
						src={animal.url} />
					<h3>{animal.location.city}</h3>
					<p>{ animal.type }</p>
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