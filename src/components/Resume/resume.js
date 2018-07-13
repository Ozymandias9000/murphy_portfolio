import React from "react";
import { Link } from 'react-router-dom'
import './resume.css'


const Resume = () => (
  < div className='resume-container' >
    {window.scrollTo(0, 0)}
    <Link to='/'>
      <div className='back-button-container'>
        <div className='back-button'> </div>
      </div>
    </Link>

    <header>
      <div>
        <h1>
          NICK MURPHY
        </h1>
        <a href='https://github.com/Ozymandias9000/' target='_blank' rel='noopener noreferrer'>
          <img src='https://www.shareicon.net/download/2016/08/13/808608_logo.svg' alt='GitHub Logo' />
        </a>
      </div>
      <div>
        <h3>Full Stack Developer</h3>
      </div>
    </header>

    <main>
      <section>
        <h2>
          PROJECTS
      </h2>
        <hr />
        <div>
          <h3>
            Drinkful
        </h3>
          <ul>
            <li>
              PWA - Quick and easy lookup of craft beer
          </li>
            <li>
              <i>Frontend: </i>React, React Router, Stylus, ES6, LocalStorage
          </li>
            <li>
              <i>Backend: </i>Node, Express, Cheerio
          </li>
          </ul>
        </div>

        <div>
          <h3>
            Murphystagram
        </h3>
          <ul>
            <li>
              SPA - Instagram-like photo gallery
          </li>
            <li>
              <i>Frontend: </i>React, Redux, React Router, Stylus, ES6
          </li>
            <li>
              <i>Backend: </i>Node, Express, Firebase
          </li>
          </ul>
        </div>

        <div>
          <h3>
            Now That's Delicious
        </h3>
          <ul>
            <li>
              Yelp-like restaurant and review aggregator
          </li>
            <li>
              Built using Wes Bos' <i>'Learn Node'</i> course
          </li>
            <li>
              <i>Frontend: </i>Pug, CSS, ES6
          </li>
            <li>
              <i>Backend: </i>Node, Express, MongoDB, Mongoose
          </li>
          </ul>
        </div>

        <div>
          <h3>
            Smart Brain
        </h3>
          <ul>
            <li>
              Face detection in images using Clarifai API
          </li>
            <li>
              Built using <i>'The Complete Web Developer in 2018'</i> Udemy course
          </li>
            <li>
              <i>Frontend: </i>React, CSS, ES6
          </li>
            <li>
              <i>Backend: </i>Node, Express, MongoDB, Mongoose
          </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>
          TECHNOLOGIES
      </h2>
        <hr />
        <div>
          <ul>
            <li>
              <i>Languages: </i> Javascript (ES5, ES6, & JSX), HTML, CSS (including Grid & Flexbox)
          </li>
            <li>
              <i>Libraries & Frameworks: </i>React, Redux, Express, Pug (Jade), Stylus
          </li>
            <li>
              <i>Other Technologies: </i>Git/GitHub, NPM, AJAX (including Async/Await & Fetch), Heroku
          </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>
          EDUCATION
      </h2>
        <hr />
        <div>
          <ul>
            <li>
              <i>2016 - present:</i> Self-Taught Full-Stack Web Developer
          </li>
            <li>
              <i>2013:</i> B.A. in Liberal Arts from Thomas Aquinas College
          </li>

          </ul>
        </div>
      </section>

      <section>
        <h2>
          WORK
      </h2>
        <hr />
        <div>
          <ul>
            <li>
              <i>2014 - present:</i> Teacher at Great Hearts Academies
          </li>

          </ul>
        </div>
      </section>

      <section>
        <h2>
          CONTACT
      </h2>
        <hr />
        <div>
          <ul>
            <li>
              <i>Email:</i> <a href='mailto:nick_murphy@sbcglobal.net'>nick_murphy@sbcglobal.net</a>
            </li>
            <li>
              <i>Phone:</i> 805-283-7680
          </li>
          </ul>
        </div>
      </section>
    </main>
  </div >
)

export default Resume;
