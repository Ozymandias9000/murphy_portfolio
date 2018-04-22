import React from 'react';
import './header.css';
import Nav from '../Nav/nav';

const Header = props => (
	<header>
		<span id ='home'></span>
		<Nav />
		<div className='banner-text'>
			<h1>Hey, I'm Nick Murphy.</h1>
			<h3>Web development is an obsession of mine. Scroll through and check out my projects!</h3>
		</div>	
	</header>
);

export default Header;