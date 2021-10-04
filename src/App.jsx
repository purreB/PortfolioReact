import React from 'react';
import FooterBar from './components/FooterBar';
import Navbar from './components/Navbar';
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
