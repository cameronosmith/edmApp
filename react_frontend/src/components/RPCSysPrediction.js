//RPC stands for right pane content
import React, { Component } from 'react';
import EmbeddingPlot from "./EmbeddingPlot";

/* the actual right pane content element */
class RPCSysPrediction extends Component {
    render() {
        console.log(this.props.title)
        return (
        <div>
            <div style={upperDisplay}>
                <div style={graphContainer}>
                    <EmbeddingPlot width={graphWidth} height={graphHeight}/>
                </div>
                <div style={graphContainer}>
                    <EmbeddingPlot width={graphWidth} height={graphHeight}/>
                </div>
            </div>
            <a style={chooseEmbeddingStyle}> Choose optimal embedding dimension </a>
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
const chooseEmbeddingStyle = {
    fontSize: '20px',
    fontFamily: 'arial',
}

export default RPCSysPrediction;
