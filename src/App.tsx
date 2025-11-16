/**
 * Root App component
 * Sets up routing and renders the main layout with header and page components.
 */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import AirGATE from './pages/AirGATE';
import Artemis from './pages/Artemis';
import FlightBASE from './pages/FlightBASE';
import Skills from './pages/Skills';


function App() {
  return (
    <Router>
      <Header />
      <main className='MainContent'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/airgate' element={<AirGATE />} />
          <Route path='/artemis' element={<Artemis />} />
          <Route path='/flightbase' element={<FlightBASE />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;