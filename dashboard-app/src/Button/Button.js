import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="waves-effect waves-light btn" onClick={this.props.onClick}>{this.props.text}</div>
      </div>
    );
  }
}

export default Button;
