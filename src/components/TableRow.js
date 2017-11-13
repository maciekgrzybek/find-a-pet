import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal, selectAnimal } from '../actions/index';
import { Link } from 'react-router-dom';
import Button from './Button';



class TableRow extends Component {


	render() {
		
		const { animal } = this.props;
		const rowHoverClass = this.props.id === this.props.hover ? 'table__row--hover': '';
		const type = animal.addType === 'found' ? 'Znaleziony' : animal.addType === 'lost' ? 'Zagubiony' : 'Do adopcji';

		const imageWrapperStyle = {
			backgroundImage: `url(${animal.url})`,
		}

		return (
			<Link to={`zwierzak/${animal.addType}/${this.props.id}`}>
				<li
					className={ `table-row table-row--${animal.addType} ${rowHoverClass}` }
					style={ this.props.style }
					onMouseEnter={() => this.props.hoverAnimal(this.props.id)}
					onMouseLeave={() => this.props.hoverAnimal(null)}
					onClick={() => this.props.selectAnimal(this.props.id)}>
						<div className="table-row__image-wrapper" 
									style={imageWrapperStyle}>
						</div>
						<div className="table-row__details-wrapper" >
							<h4 className="table-row__title">{ type }</h4>
							<p className="table-row__details">{animal.date}</p>
							<p className="table-row__details">{animal.location.city}</p>
							<Button color={ animal.addType } label='Wiecej' />
						</div>
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