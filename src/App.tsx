import React from 'react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import { ShowProjects } from './components/Slider/ShowProjects';


function App() {

  
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <About />
        <ShowProjects />
      </main>
      <Footer />
    </>
  );
}

export default App;

