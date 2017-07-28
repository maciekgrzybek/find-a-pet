import React from 'react';

const Marker = ({ url }) => {

	return (
		<div>
			<img style={{height:20}} src={ url } alt=""/>
		</div>
	);
}

export default Marker;