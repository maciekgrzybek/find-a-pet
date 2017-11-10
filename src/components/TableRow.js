import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal, selectAnimal } from '../actions/index';
import { Link } from 'react-router-dom';



class TableRow extends Component {


	render() {

		// const tableRowStyleHover= {
		// 	color: 'red',
		// 	background: 'yellow'
		// }
		// const tableRowStyle= {
		// 	color: 'green'
		// }

		
		const { animal } = this.props;
		const rowHoverClass = this.props.id === this.props.hover ? 'table__row--hover': '';

		return (
			<Link to={`zwierzak/${animal.addType}/${this.props.id}`}>
				<li
					className={ `table__row table__row--${animal.addType} ${rowHoverClass}` }
					style={ this.props.style }
					onMouseEnter={() => this.props.hoverAnimal(this.props.id)}
					onMouseLeave={() => this.props.hoverAnimal(null)}
					onClick={() => this.props.selectAnimal(this.props.id)}>
						<img
							className="table__image"
							src={animal.url} />
						<h3>{animal.location.city}</h3>
						<p>{ animal.type }</p>
				</li>
			</Link>
		)
	}
}

function mapStateToProps(state) {
	return {
		hover: state.hover
	}
}

export default connect(mapStateToProps, { hoverAnimal, selectAnimal })(TableRow);