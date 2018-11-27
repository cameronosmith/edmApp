import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {pages} from "./pageConstants.js"

var loadPage = pages.IMPORT_DATA_PAGE;//pages.SYSTEM_PREDICTION_PAGE//IMPORT_DATA_PAGE;
ReactDOM.render(<App pageName={loadPage}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
