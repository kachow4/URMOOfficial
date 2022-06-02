import React from 'react';
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

      <div id="nav-tabs">
        <a href=".">About</a>
        <a href=".">History</a>
        <a href=".">Our Team</a>
        <a href=".">Resources</a>

      </div>

    </div>
  )
}
