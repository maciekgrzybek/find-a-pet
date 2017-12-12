import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import { Link } from 'react-router-dom';
import Button from './Button';
import Icon from './Icon';



class TableRow extends Component {


	render() {
		
		const { animal } = this.props;
		const rowHoverClass = this.props.id === this.props.hover ? 'table-row--hover': '';
		const type = animal.addType === 'found' ? 'Znaleziony' : animal.addType === 'lost' ? 'Zagubiony' : 'Do adopcji';

		const imageWrapperStyle = {
			backgroundImage: `url(${animal.url})`,
		}

		return (
			<Link to={`zwierzak/${animal.addType}/${this.props.id}`}>
				<li
					className={ `grid-x table-row table-row--${animal.addType} ${rowHoverClass}` }
					style={ this.props.style }
					onMouseEnter={() => this.props.hoverAnimal(this.props.id)}
					onMouseLeave={() => this.props.hoverAnimal(null)}
					//onClick={() => this.props.selectAnimal(this.props.id)}
					>

						<div className="small-6 large-4 cell table-row__image-wrapper" 
									style={imageWrapperStyle}>
						</div>

						<div className="small-6 large-8 cell table-row__details-wrapper">
							<div className="grid-x">

								<div className="small-12 large-6 cell align-self-middle table-row__details-wrapper-inner" >
									<h4 className="table-row__title">{ type }</h4>
									<div className="grid-x">
										<div className="shrink align-self-middle cell">
										<Icon 
											icon="date" 
											class={`table-row__icon marker__icon marker--${animal.addType}__icon`} 
											width="15px"
											height="15px"/>
										</div>
										<div className="auto cell align-self-middle">
											<p className="table-row__details">{animal.date}</p>
										</div>
									</div>
									<div className="grid-x">
										<div className="shrink align-self-middle cell">
										<Icon 
											icon="mapMarker" 
											class={`table-row__icon marker__icon marker--${animal.addType}__icon`} 
											width="15px"
											height="15px"/>
										</div>
										<div className="auto cell align-self-middle">
											<p className="table-row__details">{animal.location.city}</p>
										</div>
									</div>
								</div>
								<div className="small-12 large-6 cell align-self-middle">
									<Button color={ animal.addType } label='Wiecej' />
								</div>
							</div>
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

export default connect(mapStateToProps, { hoverAnimal })(TableRow);