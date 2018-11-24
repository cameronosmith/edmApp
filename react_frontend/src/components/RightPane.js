import React, { Component } from 'react';
import InfoIcon from './InfoIcon'
import RPCImportData from './RPCImportData'

/* the actual header element */
class RightPane extends Component {
    //the content to display
    content = null;

    
    constructor (props) {
        super (props);
        this.content = this.props.content;
        this.state = {
            content: this.props.content,
            title: this.props.title,
        }
        console.log(this.props);

        this.displayNewContent = this.displayNewContent.bind(this);
    }
    /* function to reset the content of the right pane
     * @pageObj: the page containing the rpc and other bullshit
     * */
    displayNewContent (pageObj) {
        this.content = null; 
        console.log(pageObj.title);
        this.setState({
                ['title']: pageObj.rightPaneTitle,
                ['content'] : pageObj.RPC,
        });
    }
    
    render() {
      return (
          <div style={paneContainer}>
              <div style={paneHeaderStyling}>
                  <a style={paneTitleStyling}>{this.state.title}</a>
                  <InfoIcon height={paneHeaderStyling.height} color="gray"/>
              </div>
              <div style={paneStyling}> 
                    {this.state.content}
              </div>
          </div>
      );
  }
}

//style constants
const paneWidth = '97%';
const paneColor = 'white';
const marginRight = '10px';
const marginLeft = '20px';
const boxShadow = '#80808024 0px 0px 16px 0px';
const borderRadius = '3px';

const paneContainer = {
    width:'75%',
    height:'90%',
    float:'right',
}

const paneTitleStyling = {
    fontFamily: 'arial',
    fontSize: '23px',
    lineHeight: '40px',
    marginLeft: '20px', 
}

/* styling */
//for the header of the div
const paneHeaderStyling = {
    width: paneWidth,
    //should be constant since we don't need title to resize
    height: '40px',
    backgroundColor: paneColor,
    marginTop: '20px',
    marginBottom: '5px',
    marginRight: marginRight,
    boxShadow: boxShadow,
    borderRadius: borderRadius,
    marginLeft: marginLeft,
}
//for the right pane div
const paneStyling = {
    width: paneWidth,
    height: '90%',
    backgroundColor: paneColor,
    marginRight: marginRight,
    boxShadow: boxShadow,
    borderRadius: borderRadius,
    marginLeft: marginLeft,
}

export default RightPane;
