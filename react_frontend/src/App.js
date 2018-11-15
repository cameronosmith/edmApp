import React, { Component } from 'react';
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
const importDataPageTitle = "importing data / choose analysis focus";
const systemPredictionPageTitle = "system prediction";
const generalParametersTitle = "parameters";

class App extends Component {

    constructor(props) {
        super(props);
        this.handleProgramParams = this.handleProgramParams.bind(this);
        this.receieveImportData = this.receieveImportData.bind(this);
    }

    //the page object to be stored by which page selected
    pageObj = {rightPaneTitle:'',leftPaneTitle: generalParametersTitle, 
        LPC: <LPCParameters callbackFunction={this.handleProgramParams} />
    }

    /* functions to render each page
     * side effects: populates the pageObj object
     * @return: none
     * */
    importDataPage () {
        this.pageObj.rightPaneTitle = importDataPageTitle;
        this.pageObj.RPC = <RPCImportData callbackFunction={this.receieveImportData}/>;
    }
    systemPredictionPage () {
        this.pageObj.rightPaneTitle = systemPredictionPageTitle;
        this.pageObj.RPC = <RPCSysPrediction />;
    }

    /* function to get the fine tuning params from the params pane */
    handleProgramParams (data) {
        console.log(data);
    }

    /* function to set up the prediction page and receive the user import data */
    receieveImportData (data) {
        console.log(data);
        //set up sys prediction content
        this.systemPredictionPage();
        console.log(this.pageObj.RPC)
        this.RPCInstance.displayNewContent(this.pageObj);
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
            <LeftPane title={this.pageObj.leftPaneTitle} content={this.pageObj.LPC}></LeftPane>
            <RightPane ref={instance => { this.RPCInstance = instance; }} 
                title={this.pageObj.rightPaneTitle} content={this.pageObj.RPC}>
            </RightPane>
            </RootContainer>
        );
    }
}

export default App;
