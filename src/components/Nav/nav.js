import React from 'react';
import './nav.css';

class Nav extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
        active: false,
    };
  }

	toggleMenu = (e) => {
		console.log(e.target)
		const currentState = this.state.active;
    this.setState({ active: !currentState });	
	}

	render() {
		return (
			<nav>
				<a href='#home' id='home'>Home</a>
					 	
					<div className='menu-content'>	
						<ul className={this.state.active ? 'menu-open': 'menu-closed'}>
							<li><a href='#about'>About</a></li>
							<li><a href='#contact'>Contact</a></li>
							<li><a href='#resume'>Resume</a></li>
							<li><a href='#projects'>Projects</a></li>
						</ul>
					</div> 
				
			</nav>
			);
		}
};

export default Nav;