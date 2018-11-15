import React, { Component } from 'react';
import {FaInfoCircle} from 'react-icons/fa';

/* the actual icon element */
class InfoIcon extends Component {
    //note: height prop is height of container so icon veritcal aligned
  render() {
      return (
          <FaInfoCircle style={infoIconStyle(this.props.height,this.props.color)}/>
      );
  }
}

//styling for the info icon
const infoIconStyle = (height, color) => {
    return {
        float: 'right',
        height: height,
        color: color,
        marginRight: '20px',
    }
}

export default InfoIcon;
