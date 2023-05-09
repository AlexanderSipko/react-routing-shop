
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import My404Component from './pages/NotFound'


function App() {
  return (
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<My404Component />} />
      </Routes>
  );
}

export default App;
