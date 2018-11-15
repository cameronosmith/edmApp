import React, { Component } from 'react';
import InfoIcon from './InfoIcon'
import LPCParameters from './LPCParameters'

/* the actual header element */
class LeftPane extends Component {
    render() {
          return (
              <div style={paneContainer}>
                  <div style={paneHeaderStyling}> 
                      <a style={paneTitleStyling}>{this.props.title}</a>
                      <InfoIcon height={paneHeaderStyling.height} color="gray"/>
                  </div>
                  <div style={paneStyling}> 
                      {this.props.content}
                  </div>
              </div>
      );
  }
}

//style constants
const paneWidth = '95%';
const paneColor = '';
const boxShadow = 'rgba(128, 128, 128, 0.08) 0px 0px 16px 0px';
const marginLeft = '10px';

const paneTitleStyling = {
    fontFamily: 'arial',
    fontSize: '23px',
    lineHeight: '40px',
    marginLeft: '20px', 
}

const paneContainer = {
    width: '25%',
    height:'90%',
    float:'left',
}
/* styling */
//for the header of the div
const paneHeaderStyling = {
    width: paneWidth,
    //should be constant since we don't need title to resize
    height: '40px',
    backgroundColor: paneColor,
    marginTop: '20px',
    marginLeft: marginLeft,
    marginBottom: '5px',
    boxShadow: boxShadow,
    borderRadius: '5px',
}
//for the right pane div
const paneStyling = {
    width: paneWidth,
    height: '90%',
    marginLeft: marginLeft,
    backgroundColor: paneColor,
    boxShadow: boxShadow,
    borderRadius: '5px',
}

export default LeftPane;
