import React from 'react';
import './header.css';
import Nav from '../Nav/nav';

const Header = props => (
	<header>
		<Nav />
		<h1>Hello there!</h1>
		<p>This is cool. Whoa!</p>
		<button>Submit</button>
	</header>
);

export default Header;