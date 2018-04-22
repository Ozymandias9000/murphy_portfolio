import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
	componentDidMount() {
		const panels = document.querySelectorAll('.panel');

		function toggleOpen(e) {
			// if (e.path[0] === p) {
			console.log(e.path[0]);
		  this.classList.toggle('open');
		// }
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
			      <p>Hey</p>
			      <p>Let's</p>
			      <p>Dance</p>
			    </div>
			    <div className="panel panel2">
			      <p>Give</p>
			      <p>Take</p>
			      <p>Receive</p>
			    </div>
			    <div className="panel panel3">
			      <p>Experience</p>
			      <p>It</p>
			      <p>Today</p>
			    </div>
			    <div className="panel panel4">
			      <p>Give</p>
			      <p>All</p>
			      <p>You can</p>
			    </div>
			    <div className="panel panel5">
			      <p>Life</p>
			      <p>In</p>
			      <p>Motion</p>
			    </div>
			    <div className="panel panel6">
			      <p>What</p>
			      <p>Now</p>
			      <p>?</p>
			    </div>
			  </div>
			</section>
		);
	}
}

export default Projects;