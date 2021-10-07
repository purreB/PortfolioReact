import React from 'react';
import FooterBar from './components/FooterBar';
import Navbar from './components/Navbar';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <p>Main</p>
      </main>
      <FooterBar />
    </div>
  );
}

export default App;
