import React from 'react';
import Header from './component/Header/Header';
import About from './component/Sections/About/About';
import Features from './component/Sections/Features/Features';
import Projects from './component/Sections/Projects/Projects';
import Footer from './component/Footer/Footer';
import './App.css';
import './App-media.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <About />
        <Features />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
