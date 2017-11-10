import React from 'react';
import Button from './Button';

const MainHero = () => {
	return (
		<div className="hero">		
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h1>Zgubiles swojego pupila?</h1>
						<p>Twój kot postanowił zrobić dłuższy spacer bez Ciebie?
A może, widziałeś błąkającego się po osiedlu psa? Pomagamy
w takich wypadkach.</p>
						<Button color='primary' label='Znajdz Zwierzaka' />
					</div>
				</div>
			</div>
		</div>		
	);
}

export default MainHero;