import React from "react";
import Header from "../Header/header";
import AboutMe from "../AboutMe/aboutme";
import Projects from "../Projects/projects";
import Footer from "../Footer/footer";
import Nav from '../Nav/nav'

const Main = () => (
  <main>
    <Nav />
    <Header />
    <Projects />
    <AboutMe />
    <Footer />
  </main>
);

export default Main;
