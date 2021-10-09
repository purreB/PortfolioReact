import React from 'react';
import FooterBar from './components/FooterBar';
import Navbar from './components/Navbar';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Portfolio />
        <Skills />
      </main>
      <FooterBar />
    </div>
  );
}

export default App;
