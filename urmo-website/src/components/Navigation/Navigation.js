import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Navigation/Navigation.css'
import {ReactComponent as URMOLogo} from '../../assets/images/URMOlogo.svg';


export default function Navigation() {
  return (
    <div id="nav-container">
      <div id="nav-logo">
        <URMOLogo
          style={{height: 60, width: 60}}
        />
      </div>

    <nav id="nav-tabs">
        <Link to="/" className='tab'>Home</Link>
        <Link to="/about" className='tab'>About</Link>
        <Link to="/history" className='tab'>History</Link>
        <Link to="/team" className='tab'>Our Team</Link>
        <Link to="/resources" className='tab'>Resources</Link>
      </nav>
    </div>
  )
}
