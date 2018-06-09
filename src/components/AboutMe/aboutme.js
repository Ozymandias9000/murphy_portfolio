import React from 'react';
import './aboutme.css';

const AboutMe = props => (
	<div className='about-me'>
		<span id='about'></span>
		<div className='about-me__text'>
			<h2>
					About Me
			</h2>
			<p>
				I'm a developer working in Phoenix. When I'm not coding, I love hiking, playing guitar, and cooking!
			</p>
			<span id='contact'></span>
			<h2>
				Contact Details
			</h2>
			<p>
				Nick Murphy <br />
				Phoenix, AZ <br />
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
