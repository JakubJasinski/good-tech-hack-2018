import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="waves-effect waves-light btn" onClick={this.props.onClick}>KLAR MED DAGEN</div>
      </div>
    );
  }
}

export default Button;
