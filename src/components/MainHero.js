import React from 'react';
import Button from './Button';

const MainHero = () => {
	return (
		<div className="hero">		
			<div className="grid-container">
				<div className="grid-x grid-padding-x">
					<div className="cell">
						<h1 className="hero__title">Zgubiles swojego pupila?</h1>
						<p className="hero__text">Twój kot postanowił zrobić dłuższy spacer bez Ciebie?
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