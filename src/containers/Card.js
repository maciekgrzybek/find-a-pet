import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hoverAnimal } from '../actions/index';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Icon from '../components/Icon';



class Card extends Component {


	render() {
		
		const { animal } = this.props;
		const rowHoverClass = animal.id === this.props.hover ? 'card--hover': '';
		const type = animal.addType === 'found' ? 'Znaleziony' : animal.addType === 'lost' ? 'Zagubiony' : 'Do adopcji';

		const imageWrapperStyle = {
			backgroundImage: `url(${animal.url})`,
		}

		return (
			<Link to={`zwierzak/${animal.addType}/${animal.id}`}>
				<div
					className={ `card card--${animal.addType} ${rowHoverClass}` }
					style={ this.props.style }
					onMouseEnter={() => this.props.hoverAnimal(animal.id)}
					onMouseLeave={() => this.props.hoverAnimal(null)}
					//onClick={() => this.props.selectAnimal(animal.id)}
					>

						<div className="card__image-wrapper" style={imageWrapperStyle}>
						</div>
						<div className="card__details-wrapper">
							<div>
								<h4 className="card__title">{ type }</h4>
							</div>
							<div className="card__details-row">
								<Icon 
									icon="date" 
									class={`card__icon marker__icon marker--${animal.addType}__icon`} 
									width="15px"
									height="15px"/>
									<p>{animal.date}</p>
							</div>
	
							<div className="card__details-row">
								<Icon 
									icon="mapMarker" 
									class={`card__icon marker__icon marker--${animal.addType}__icon`} 
									width="15px"
									height="15px"/>
									<p>{animal.location.city}</p>
							</div>
							<div>
								<Button color={ animal.addType } label='Wiecej' />
							</div>
						</div>
				</div>
			</Link>
		)
	}
}

function mapStateToProps(state) {
	return {
		hover: state.hover
	}
}

export default connect(mapStateToProps, { hoverAnimal })(Card);