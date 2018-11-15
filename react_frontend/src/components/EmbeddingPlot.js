import React, { Component } from 'react';
import Plot from 'react-plotly.js';

/* the actual embedded plot element */
class EmbeddingPlot extends Component {
  render() {
      return (
       <Plot
            data={[//to be loaded from backend later
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: 'red'},
                },
            ]}
            layout={ {autosize: false, xaxis : {title:'xAxis'}, yaxis : {title:'yAxis'}, 
                    width:this.props.width,height: this.props.height,  
                    title: 'Embedding = X, p = Y'} }
            />
      );
  }
}
 
export default EmbeddingPlot;;
