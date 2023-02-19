import React, { Component } from 'react'
import './App.css';
import LogRocket from 'logrocket';
import { Link, Routes, Route } from 'react-router-dom';
import { FaHome, FaDownload, FaBookOpen, FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';
import Home from './pages/Home.jsx';
import Event from './pages/Event';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import Download from './pages/Download.jsx';
import Footer from './components/Footer';
import ChatApp from './components/ChatApp';





// project id from logrocket
const LOG_ROCKET_PROJECT_ID = 'zpqkuw/pupbc-askolar'

class App extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      recordUI: false,
    }
  }
  //integration and for records ng system to logrocket
  componentWillMount() {
    const user = {
      email: "",
      recordFrontendLogging: true,
      recordFrontendNetworkCalls: true,
      recordFrontendUI: true,
      associateFrontendLogsWithUser: true,
    }
    //irerecord ba yung user view or not
    if (!user || !user.recordFrontendUI) {
      this.setState({
        recordUI: false,
      })
    } else {
      this.setState({
        recordUI: true,
      })
    }
    //irerecord ba yung network calls or not
    if (user && user.recordFrontendNetworkCalls) {
      LogRocket.init(LOG_ROCKET_PROJECT_ID, {
        network: {
          isEnabled: true,
        }
      })
    } else {
      LogRocket.init(LOG_ROCKET_PROJECT_ID, {
        network: {
          isEnabled: false,
        }
      })
    }
    //for records ng user names/emails every visits
    if (user && user.associateFrontendLogsWithUser) {
      LogRocket.identify(user.email, {
      })
    }
  }

  render() {
    const {
      recordUI,
    } = this.state

    const content = (
      <>
        <div className='navBar'>
          <div className='navTitle'>
            <h4>ASKolar : PUPBC CHATBOT</h4>
          </div>
          <nav>
              <ul className="navlist">
                <li className="navitems">
                  <Link to="/"><FaHome /> Home</Link>
              </li>
              <li className="navitems">
                  <Link to="/events"><FaCalendarCheck /> Announcements</Link>
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
          </nav>


          {/* NAVIGATION ROUTING FOR EVERY PAGES */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/events" element={<Event />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/download" element={<Download />} />
            <Route exact path="/chatbot" element={<ChatApp />} />
          </Routes>
          <Footer />
        </div>
      </>
    );
    //for not allowing to record ang ginagawang clicks/hover/view for the website
    if (!recordUI) {
      return (
        <div data-private>
          {content}
        </div>
      )
    }
    //for video record ng ginagawang clicks/hover/view for the website
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default App;
