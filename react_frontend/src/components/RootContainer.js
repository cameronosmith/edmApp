import React, { Component } from 'react';

/* the actual header element */
class RootContainer extends Component {
  render() {
      return (
          <div style={rootContainerStyle}> 
              {this.props.children}
          </div>
      );
  }
}

/* styling */
const rootContainerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2'
}

export default RootContainer;
