import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';


const Navigation = () => {
	return (

			<div className="grid top-bar middle-xs">
				<div className="col_xs-4_sm-6_md-4_lg-2 top-bar__logo">
					<NavLink to="/">
						<Icon 
							icon="logo"
							width="auto"
							height={40} />
					</NavLink>
				</div>
				<div className="col_xs-8_sm-6_md-4_lg-2 top-bar__menu">

						<ul className="navigation end-xs">
							<li className="navigation__item">								
								<NavLink exact to="/"><Icon icon="home" /><span>Strona główna</span></NavLink>
							</li>
							<li className="navigation__item">								
								<NavLink exact to="/rodzaj-ogloszenia"><Icon icon="advert" /><span>Dodaj ogłoszenie</span></NavLink>
							</li>
							<li className="navigation__item">								
								<NavLink exact to="/kontakt"><Icon icon="contact" /><span>Kontakt</span></NavLink>
							</li>
						</ul>

				</div>
			</div>
	);
}

export default Navigation;