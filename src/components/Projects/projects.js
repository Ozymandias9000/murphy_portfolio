import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
	componentDidMount() {
		const panels = document.querySelectorAll('.panel');

		function toggleOpen() {
		  this.classList.toggle('open');
		}

		function toggleActive(e) {
		  if (e.propertyName.includes('flex')) {
		  this.classList.toggle('open-active');
		  }
		}

		panels.forEach(panel => panel.addEventListener('click', toggleOpen));
		panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
	}

	render() {
		return (
			<section>
				<span id='projects'></span>
				<div className='project-text'>
					<h3>
						Projects
					</h3>
					<p>
						Click to see details!
					</p>
				</div>

				<div className="panels-container">
			    {/* <div className="panel panel1">
			      <p><a href='https://github.com/Ozymandias9000/face-recog/' target='_blank' rel='noopener noreferrer' >View Source</a></p>
			      <p>Smart Brain</p>
			      <p><a href='https://smart-brain-nm.herokuapp.com/' target='_blank' rel='noopener noreferrer'>View App on Heroku</a></p>
			    </div>
			    <div className="panel panel2">
			      <p><a href='https://github.com/Ozymandias9000/background-generator/' target='_blank' rel='noopener noreferrer'>View Source</a></p>
			      <p>Background Generator</p>
			      <p><a href='https://ozymandias9000.github.io/background-generator/' target='_blank' rel='noopener noreferrer'>View App</a></p>
			    </div>
			    <div className="panel panel3">
			      <p><a href='https://github.com/Ozymandias9000/todolocalstorage/' target='_blank' rel='noopener noreferrer'>View Source</a></p>
			      <p>To-Do with Local Storage</p>
			      <p><a href='https://ozymandias9000.github.io/todolocalstorage/' target='_blank' rel='noopener noreferrer'>View App</a></p>
			    </div>
			    <div className="panel panel4">
			      <p><a href='https://codepen.io/Aristocles/pen/gmyrme' target='_blank' rel='noopener noreferrer'>View on CodePen</a></p>
			      <p>Pomodoro Clock</p>
			      <p><a href='https://codepen.io/Aristocles/full/gmyrme/' target='_blank' rel='noopener noreferrer'>View App</a></p>
			    </div>
			    <div className="panel panel5">
			      <p><a href='https://codesandbox.io/s/xp9l8jm5yz/' target='_blank' rel='noopener noreferrer'>View on CodeSandbox</a></p>
			      <p>React Coin</p>
			      <p><a href='https://codesandbox.io/s/xp9l8jm5yz/' target='_blank' rel='noopener noreferrer'>View App</a></p>
			    </div>
			    <div className="panel panel6">
			      <p><a href='https://codepen.io/Aristocles/pen/wzkXJp' target='_blank' rel='noopener noreferrer'>View on CodePen</a></p>
			      <p>Wikipedia Search</p>
			      <p><a href='https://codepen.io/Aristocles/full/wzkXJp/' target='_blank' rel='noopener noreferrer'>View App</a></p>
			    </div> */}
			  </div>
			</section>
		);
	}
}

export default Projects;