//RPC stands for right pane content
import React, { Component } from 'react';
import EmbeddingPlot from "./EmbeddingPlot";

/* the actual right pane content element */
class RPCSysPrediction extends Component {
    render() {
        return (
            <div style={upperDisplay}>
                <div style={graphContainer}>
                    <EmbeddingPlot width={graphWidth} height={graphHeight}/>
                </div>
                <div style={graphContainer}>
                    <EmbeddingPlot width={graphWidth} height={graphHeight}/>
                </div>
            </div>
        );
    }
}
const graphWidth=500;
const graphHeight = 300;
//the style to make the upper display the top half of the pane
const upperDisplay = {
    width: '100%',
    height: "350px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const graphContainer = {
    width: graphWidth+"px",
    height: graphHeight+"px",
}


export default RPCSysPrediction;
