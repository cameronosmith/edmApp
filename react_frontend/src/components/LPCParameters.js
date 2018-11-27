//LPC stands for left pane content
import React, { Component } from 'react';
import InfoIcon from './InfoIcon'

/* the actual parameters pane element */
class LPCParameters extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.generateParamHtml = this.generateParamHtml.bind(this);
        this.updateParams = this.updateParams.bind(this);

        
        this.props.http.post ('/requestParameters', {}).then((result) => {
            this.setState(result.data.parameters)
        })

    }
    /* function to handle the change on a parameter field
     * @param event: 
     * */
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, this.updateParams);
    }

    /* function to pass the param data back up to the app */
    updateParams(){
        this.props.http.post ('/updateParameters', {parameters: this.state})
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
