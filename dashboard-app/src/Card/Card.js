import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import './card.css';

class Card extends Component {
  onDragStart = (e) => {
    e.preventDefault();
    this.props.disableSwiper(true);
  }
  onDragStop = (e) => {
    e.preventDefault();
    this.props.disableSwiper(false);

  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="text">{this.props.text}</div>

          <div className="left option">{this.props.leftOption}</div>
          <div className="right option">{this.props.rightOption}</div>
          <Slider onDragStart={this.onDragStart} onDragStop={this.onDragStop}/>
        </div>
      </div>
    );
  }
}

export default Card;
