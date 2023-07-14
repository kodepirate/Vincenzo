import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import InRegards from './components/InRegards';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <InRegards />
      <News />
      <Footer />
    </div>
  );
}

export default App;
