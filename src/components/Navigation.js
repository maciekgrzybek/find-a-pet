import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';


const Navigation = () => {
	return (

			<div className="grid top-bar middle-xs">
				<div className="col_xs-12_sm-6_md-4_lg-2 top-bar__logo">
					<Link to="/">
						<Icon 
							icon="logo"
							width={100}
							height={50} />
					</Link>
				</div>
				<div className="col_xs-12_sm-6_md-4_lg-2 top-bar__menu">

						<ul className="navigation end-xs">
							<li className="navigation__item">
								<Link to="/">Strona główna</Link>
								<Icon icon="home" />
							</li>
							<li className="navigation__item">
								<Link to="/rodzaj-ogloszenia">Dodaj ogłoszenie</Link>
								<Icon icon="advert" />
							</li>
							<li className="navigation__item">
								<Link to="/kontakt">Kontakt</Link>
								<Icon icon="contact" />
							</li>
						</ul>

				</div>
			</div>
	);
}

export default Navigation;