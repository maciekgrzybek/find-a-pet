import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Icon from './Icon';


class Navigation extends Component  {

	constructor(props){
		super(props);
		this.state = {
			navClass: ''
		}

		this.navScroll = this.navScroll.bind(this);
	}
	componentDidMount() {
		window.document.body.addEventListener('scroll', this.navScroll);
  }
	componentWillUnmount() {
		window.document.body.removeEventListener('scroll', this.navScroll);
  }
	navScroll() {
		const { scrollTop } = window.document.body;
		if(scrollTop > 25) {
			this.setState({ navClass: 'top-bar--scroll'})
		} else {
			this.setState({ navClass: ''})
		}

	}

	render() {
		return (
			<div className="grid-container">
				<div className={`grid-x grid-padding-x top-bar ${this.state.navClass} align-middle`} ref="topbar">
					<div className="small-4 medium-shrink cell top-bar__logo" >
						<NavLink to="/">
							<Icon 
								icon="logo"
								width="75px"
								height="40px" />
						</NavLink>
					</div>
					<div className="small-8 medium-auto cell align-self-middle top-bar__menu">
	
							<ul className="navigation">
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
			</div>
	);
	}

}

export default Navigation;