import React from 'react';
import './Css/App.css'
import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/SobreMi';
import Portfolio from './components/Portfolio';
import Educacion from './components/Educacion';
import Skills from './components/Skills';
import Contact from './components/Contacto';
import ScrollBtn from './components/scroll';

const App = () => {
  return (
    <>
      <NavBar />
      <ScrollBtn />
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Educacion />
      <Contact />
    </>
  )
}

export default App;