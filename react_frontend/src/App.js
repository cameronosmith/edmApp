import axios from 'axios'
import React, { Component } from 'react'
import RootContainer from "./components/RootContainer"
import Header from "./components/Header"
import LeftPane from "./components/LeftPane"
import RightPane from "./components/RightPane"
//the different pane contents
import RPCImportData from './components/RPCImportData'
import RPCSysPrediction from './components/RPCSysPrediction'
import LPCParameters from './components/LPCParameters'
//constants for the pages
import {pages} from "./pageConstants.js"
//constants for the page titles/headers
const importDataPageTitle = "importing data / choose analysis focus"
const systemPredictionPageTitle = "system prediction"
const generalParametersTitle = "parameters"
//const for http requests
const serverUrl = "http://localhost:5000";


//to call the createClass function
var createClass = require('create-react-class');

class App extends Component {

    //use for http requests
    http = axios.create({
        baseURL: serverUrl
    }); 

    constructor(props) {
        super(props);
        this.receieveImportData = this.receieveImportData.bind(this);
        this.getParamsObj = this.getParamsObj.bind(this);
    }

    //the page object to be stored by which page selected
    pageObj = {rightPaneTitle:'',leftPaneTitle: generalParametersTitle, 
        LPC: <LPCParameters http={this.http} />
    }

    /* function to render the import data page 
     * side effects: populates the pageObj object
     * @return: none
     * */
    importDataPage () {
        this.pageObj.rightPaneTitle = importDataPageTitle;
        this.pageObj.RPC = <RPCImportData 
            callbackFunction={this.receieveImportData} http={this.http}/>;
    }
    /* function to render the system prediction page
     * side effects: populates the pageObj object
     * @return: none
     * */
    systemPredictionPage (lpcParams) {
        this.pageObj.rightPaneTitle = systemPredictionPageTitle;
        this.pageObj.RPC = <RPCSysPrediction paramsRequest={this.getParamsObj} 
             http={this.http}/>;
    }

    /* function to set up the prediction page and receive the user import data */
    receieveImportData (data) {
        console.log("received import data");
        //set up sys prediction content
        this.systemPredictionPage();
        this.RPCInstance.displayNewContent(this.pageObj);
    }

    /* function to send the parameters object to any child 
     * @return: the state parameters object
     * */
    getParamsObj () {
        console.log(this.pageObj.LPC.props.callbackFunction())
    }

    //load the app
    render() {
        /* check which page we're rendering */
        switch (this.props.pageName) {
            case pages.IMPORT_DATA_PAGE:
                this.importDataPage();
                break;
            case pages.SYSTEM_PREDICTION_PAGE:
                this.systemPredictionPage();
                break;
            default:
                alert("page passed in not found");
                break;
        }
        
        return (
            <RootContainer>
            <Header/>
            <LeftPane ref={instance => { this.LPCInstance = instance}} 
                title={this.pageObj.leftPaneTitle} content={this.pageObj.LPC}/>
            <RightPane ref={instance => { this.RPCInstance = instance; } }  
                title={this.pageObj.rightPaneTitle} content={this.pageObj.RPC}>
            </RightPane>
            </RootContainer>
        );
    }
}

export default App;
