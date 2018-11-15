//RPC stands for right pane content
import React, { Component } from 'react';
import InfoIcon from './InfoIcon'

/* the actual right pane content element */
class RPCImportData extends Component {
    constructor (props) {
        super (props);
        this.state = {
            sysPredictionChoice : false,
            sysComplexityChoice : false,
        }
        this.sysPredictionButton = this.sysPredictionButton.bind(this);
    }
    /* function to handle sys prediction button */
    sysPredictionButton () {
        console.log(this.state);
        this.state['sysPredictionChoice'] = true;
        //send back to app
        this.props.callbackFunction (this.state);
    }
    render() {
          return (
              <div style={contentContainerStyle}>
                  <a style={infoTextStyle}>Import your data file to analyze. </a>
                  <button style={Object.assign(Object.assign({},buttonStyle), importDataButtonStyle)}>Load data file</button>
                  <button style={Object.assign(Object.assign({},buttonStyle), sampleDataButtonStyle)}>Use sample data</button>
                  <br/><br/>
                  <a style={infoTextStyle}>Choose your focus of analysis.</a>
                  <div style = {analysisButtonContainer}>
                      <button onClick={this.sysPredictionButton} 
                        style={Object.assign(Object.assign({},buttonStyle), analysisFocusButtonStyle)}>System Prediction</button>
                      <button style={Object.assign(Object.assign({},buttonStyle), analysisFocusButtonStyle)}>Complexity Analysis</button>
                  </div>
              </div>
          );
  }
}

//style constants
const analysisFocusButtonWidth = 200; //the surrounding box needs to be double this
const analysisFocusButtonMargin = 20;
const prettyBlue = '#427AA1';
/* styling */
const contentContainerStyle = {
    width: '100%',
    paddingTop: '100px',
    transform: 'scale(1.4)',
}
const infoTextStyle = {
    fontSize: '20px',
    fontFamily: 'arial',
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'center',
}
const buttonStyle = {
    width: '200px',
    height: '30px',
    border: 'none',
    color: 'white',
    fontSize: '15px',
    textDecoration:'none',
    textAlign: 'center',
    borderRadius: '2px',
    display: 'block',
    margin: '0 auto',
    marginTop: '10px', 
}
const importDataButtonStyle = {
    backgroundColor: prettyBlue,
}
const sampleDataButtonStyle = {
    backgroundColor:'green',
    width: '140px',
    height: '25px',
    fontSize: '13px',
}
const analysisButtonContainer = {
    display:'block',
    margin: '0 auto',
    width: (2*analysisFocusButtonMargin+2*analysisFocusButtonWidth)+'px',
    height:'100px',
}
const analysisFocusButtonStyle = {
    width: '80%',//analysisFocusButtonWidth+'px',
    //marginRight: analysisFocusButtonMargin+'px',
    backgroundColor: prettyBlue,
    display: 'block',
    fontSize: '20px',
    margin: '0 auto',
}

export default RPCImportData;
