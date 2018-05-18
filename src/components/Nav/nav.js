import React from 'react';
import './nav.css';

class Nav extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
        active: false,
    };
  }

	 toggleMenu = () => {
			this.setState(prevState => ({ active: !prevState.active }))
			console.log(this.state.active);
		};

	render() {
		return (
			<nav className={this.state.active ? 'nav' : 'nav--responsive'}>
				<a href='#home' id='home'>Home</a>
				<a href='#about'>About</a>
				<a href='#contact'>Contact</a>
				<a href='#resume'>Resume</a>
				<a href='#projects'>Projects</a>
				<a href="javascript:void(0)" className="icon">
					<div className='menuIcon' onClick={this.toggleMenu}>
					  <div className="bar1"></div>
					  <div className="bar2"></div>
					  <div className="bar3"></div>
					</div>
				</a>
			</nav>
			);
		}
};

export default Nav;
