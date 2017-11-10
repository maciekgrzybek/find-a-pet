import React from 'react';

const Button = (props) => (

		<button className={`button button--${props.color}`}>
			{props.label}
		</button>
	
);

export default Button;
