import React, { Component } from 'react';
import InfoIcon from './InfoIcon'

/* the actual header element */
class Header extends Component {
  render() {
      return (
          <div style={headerStyling}> 
            <a style={headerText}>
                Empirical Dynamic Modeling
            </a>
          <InfoIcon height={headerHeight} color="white"/>
          </div>
      );
  }
}

//style constants
const headerHeight = '50px'
/* styling */
//for the header div
const headerStyling = {
    width: '100%',
    backgroundColor: '#427AA1',
    height: headerHeight,
    boxShadow: '0 7px 15px -6px gray',
}
//for the header text
const headerText = {
    color: 'white',
    fontSize: '20px',
    lineHeight: headerHeight,
    marginLeft: '15px',
}

export default Header;
