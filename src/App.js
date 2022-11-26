import React, { useState, useEffect } from 'react'
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { FaHome, FaDownload, FaCalendarCheck, FaBookOpen, FaInfoCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import Events from './pages/Events.jsx';
import Download from './pages/Download.jsx';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';


function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
      <>
      <div className='navBar'>
        <div className='navTitle'>
          <h4>ASKOLAR : PUPBC CHATBOT</h4>
        </div>
        <nav>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="navlist">
              <li className="navitems">
                <Link to="/"><FaHome /> Home</Link>
              </li>
              <li className="navitems">
                <Link to="/events"><FaCalendarCheck /> Events</Link>
              </li>
              <li className="navitems">
                <Link to="/courses"><FaBookOpen /> Courses</Link>
              </li>
              <li className="navitems">
                <Link to="/about"><FaInfoCircle /> About</Link>
              </li>
              <li className="navitems">
                <Link to="/download"><FaDownload /> Download</Link>
              </li>
            </ul>
          )}
          <button onClick={toggleNav} className="navbtn"><FaBars /></button>
        </nav>

        {/* NAVIGATION ROUTING FOR EVERY PAGES */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/chatbot" element={<ChatBot />} />
        </Routes>
        <Footer/>
      </div>
      </>
  );
};

export default App;
