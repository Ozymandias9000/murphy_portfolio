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
			    <div className="panel panel1">
			      <p><a href='https://github.com/Ozymandias9000/face-recog/'>View Source</a></p>
			      <p>Smart Brain</p>
			      <p><a href='https://smart-brain-nm.herokuapp.com/'>View App on Heroku</a></p>
			    </div>
			    <div className="panel panel2">
			      <p><a href='https://github.com/Ozymandias9000/background-generator/'>View Source</a></p>
			      <p>Background <br /> Generator</p>
			      <p><a href='https://ozymandias9000.github.io/background-generator/'>View App</a></p>
			    </div>
			    <div className="panel panel3">
			      <p><a href='https://github.com/Ozymandias9000/todolocalstorage/'>View on GitHub</a></p>
			      <p>To-Do with <br />Local Storage</p>
			      <p><a href='https://ozymandias9000.github.io/background-generator/'>View App</a></p>
			    </div>
			    <div className="panel panel4">
			      <p><a href='https://codepen.io/Aristocles/pen/gmyrme'>View on CodePen</a></p>
			      <p>Pomodoro Clock</p>
			      <p><a href='https://codepen.io/Aristocles/full/gmyrme/'>View App</a></p>
			    </div>
			    <div className="panel panel5">
			      <p><a href='https://github.com/Ozymandias9000/background-generator/'>View on GitHub</a></p>
			      <p>React Coin</p>
			      <p><a href='https://ozymandias9000.github.io/background-generator/'>View App</a></p>
			    </div>
			    <div className="panel panel6">
			      <p><a href='https://codepen.io/Aristocles/pen/wzkXJp'>View on CodePen</a></p>
			      <p>Wikipedia Search</p>
			      <p><a href='https://codepen.io/Aristocles/full/wzkXJp/'>View App</a></p>
			    </div>
			  </div>
			</section>
		);
	}
}

export default Projects;