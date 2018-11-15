//LPC stands for left pane content
import React, { Component } from 'react';
import InfoIcon from './InfoIcon'

/* the actual parameters pane element */
class LPCParameters extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.generateParamHtml = this.generateParamHtml.bind(this);
        this.passStateUp = this.passStateUp.bind(this);

        this.state = {
            E: "3",
            tau: "1",
            num_neighbors: "1",
            tp: "1",
            lib: "1",
            pred: "1",
            exlusion_radius: "1",
        }
    }
    /* function to handle the change on a parameter field
     * @param event: 
     * */
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, this.passStateUp);
        //pass params back to app
        this.props.callbackFunction(this.state);
    }

    /* function to pass the param data back up to the app */
    passStateUp(){
        this.props.callbackFunction(this.state); 
    }


    /*function to generate the html of a parameter input
     * @param paramName: the name of the parameter to generate
     * @return: the html for that param
     * */
    generateParamHtml (paramName) {
        return (
            <div>
            <input style = {inputStyle}
                name={paramName}
                type="number"
                value={this.state[paramName]}
                onChange={this.handleInputChange} 
            />
            <label style={labelStyle}>
                {paramName}
            </label>
            </div>
        );
    }

    /* function to call the generate param html for every state param 
     * note: if you add state parameters that aren't fine tuning params select out
     * @return: the html with all the parameters
     * */
    getAllStateParams () {
        //holds the html of the generated param inputs
        var paramElems = [];
        /* iterate through every state for each param to generate the html */ 
        for (var paramName in this.state) 
            paramElems.push(this.generateParamHtml(paramName));
        return paramElems;
    }

    render() {
        return (
          <div style={contentContainerStyle}>
            <form>
                {this.getAllStateParams()}
            </form>
          </div>
      );
  }
}



//style constants
/* styling */
const contentContainerStyle = {
    width: '100%',
    paddingTop: '50px',
    height: '90%',
}

const labelStyle = {
    fontSize: '17px',
    fontWeight:'bold',
    //marginLeft: '15px',
}

const inputStyle = {
    width: '40px', 
    display:'inline-block',
    marginRight:'15px',
    marginLeft: '20%',
    marginTop:'10px',
    textAlign: 'center',
}

export default LPCParameters;
