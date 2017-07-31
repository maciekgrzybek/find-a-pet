import React from 'react';

const Marker = (props) => {
	const markerStyleHover= {
		width: 200
	}
	const style = props.$hover ? markerStyleHover : null;

	return (
		<div className="marker" style={ style }>
			<img className="marker__image" src={ props.url } alt=""/>
		</div>
	);
}

export default Marker;