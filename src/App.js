import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro'
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <main id="main">
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
