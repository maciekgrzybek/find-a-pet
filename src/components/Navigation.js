import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
	return (

			<div className="row top-bar">
				<div className="col-xs-12 col-sm-6 center-xs start-sm top-bar__logo">
					<Link to="/">znajdz zwierzaka</Link>
				</div>
				<div className="col-xs-12 col-sm-6 center-xs end-sm top-bar__menu">
					<nav>
						<ul className="navigation">
							<li className="navigation__item">
								<Link exact to="/">Strona glowna</Link>	
							</li>
							<li className="navigation__item">
								<Link to="/dodaj">Dodaj ogloszenie</Link>
							</li>
							<li className="navigation__item">
								<Link to="/kontakt">Kontakt</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
	);
}

export default Navigation;