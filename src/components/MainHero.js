import React from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const MainHero = () => {
	return (
		<div className="hero">		
			<div className="grid-container">
				<div className="grid-x grid-padding-x hero__content">
					<div className="small-12 cell"></div>
					<div className="medium-8 large-6 large-offset-6 cell">
						<h1 className="hero__title">Zgubiles swojego pupila?</h1>
						<p className="hero__text">Twój kot postanowił zrobić dłuższy spacer bez Ciebie? A może, widziałeś błąkającego się po osiedlu psa? Pomagamy w takich wypadkach.</p>
						<NavLink exact to="/znajdz-zwierzaka">
							<Button color='primary' label='Znajdz Zwierzaka' />
						</NavLink >
					</div>
					<div className="small-12 cell hero__footer">
						<p>Znajdz Zwierzaka 2017</p>
					</div>
				</div>
			</div>
		</div>		
	);
}

export default MainHero;
