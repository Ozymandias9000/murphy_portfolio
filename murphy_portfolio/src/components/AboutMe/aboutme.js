import React from 'react';
import './aboutme.css';

const AboutMe = props => (
	<div className='about-me'>
		<div className='about-me__text'>
			<h2>
				About Me
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed sapiente debitis quibusdam cumque consequuntur, ipsam hic omnis laudantium ex, qui corporis nemo nostrum obcaecati quis fuga soluta nobis atque?
			</p>
			<h2>
				Contact Details
			</h2>
			<p>
				Nick Murphy <br />
				Lalala <br />
				City <br />
				nick_murphy@sbcglobal.net <br />	
			</p>
			<a href=''>
				<button className='about-me__button'>
					Download Resume
				</button>
			</a>
		</div>
	</div>
);

export default AboutMe;