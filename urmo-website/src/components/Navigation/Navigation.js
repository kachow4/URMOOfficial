import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import '../../assets/css/Navigation/Navigation.css'
import {ReactComponent as URMOLogo} from '../../assets/images/URMOlogo.svg';


=======
import '../../assets/css/Navigation/Navigation.css'
import {ReactComponent as URMOLogo} from '../../assets/images/URMOlogo.svg';

>>>>>>> e85fb4f0017ee9878f3114e17d751275b24b35b2
export default function Navigation() {
  return (
    <div id="nav-container">
      <div id="nav-logo">
        <URMOLogo
          style={{height: 60, width: 60}}
        />
      </div>

<<<<<<< HEAD
    <nav id="nav-tabs">
        <Link to="/" className='tab'>Home</Link>
        <Link to="/about" className='tab'>About</Link>
        <Link to="/history" className='tab'>History</Link>
        <Link to="/team" className='tab'>Our Team</Link>
        <Link to="/resources" className='tab'>Resources</Link>
      </nav>
=======
      <div id="nav-tabs">
        <a href=".">About</a>
        <a href=".">History</a>
        <a href=".">Our Team</a>
        <a href=".">Resources</a>

      </div>

>>>>>>> e85fb4f0017ee9878f3114e17d751275b24b35b2
    </div>
  )
}
