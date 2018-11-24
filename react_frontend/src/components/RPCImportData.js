//RPC stands for right pane content
import React, { Component } from 'react';
import InfoIcon from './InfoIcon'
import $ from 'jquery'

const fileButtonId = 'fileBtn'

/* the actual right pane content element */
class RPCImportData extends Component {
    constructor (props) {
        super (props);
        this.state = {
            sysPredictionChoice : false,
            sysComplexityChoice : false,
            selectedFile: "sampleDatafile"
        }
        this.sysPredictionButton = this.sysPredictionButton.bind(this);
        this.giveBackendDatafile = this.giveBackendDatafile.bind(this);
        this.giveBackendDatafile = this.giveBackendDatafile.bind(this);
    }
    
    /* function to pass data file to backend */
    giveBackendDatafile () {
        this.props.http.post ('/importDatafile', {datafile : this.state.selectedFile})
    } 

    /* function to handle sys prediction button */
    sysPredictionButton () {
        this.state['sysPredictionChoice'] = true;
        //send back to app
        this.props.callbackFunction (this.state);
    }
    /* to handle the user specifying a file - just sets the state */
    handleselectedFile = event => {
        //set state and send datafile to backend once updated
        this.setState({
            selectedFile: "hi"
            //think we're gonna nead to read in the file since we can't get the path with browser security
        }, () => {this.giveBackendDatafile()})
        console.log(event.target.files[0]);
    }
    render() {
          return (
              <div style={contentContainerStyle}>
                  <input style={{display:'none'}}type="file" name="" id={fileButtonId} onChange={this.handleselectedFile} />
                  <a style={infoTextStyle}>Import your data file to analyze. </a>
                  <button style={Object.assign(Object.assign({},buttonStyle), importDataButtonStyle)}
                        onClick={simulateFileButtonClick}>Load data file</button>
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

/* function to simulate button click */
function simulateFileButtonClick () {
    $("#"+fileButtonId).click();
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
