import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import './card.css';
import Button from '../Button/Button';
let classNames = require('classnames');

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
    let textClass = classNames('text', {'small': this.props.smallText});

    return (
      <div className="card">
        <div className="card-content">
          <div className={textClass}>{this.props.text}</div>


          {this.props.slider ? (
          <div className="bottom">
            <div className="left option">{this.props.leftOption}</div>
            <div className="right option">{this.props.rightOption}</div>

            <Slider onDragStart={this.onDragStart} onDragStop={this.onDragStop}/>
          </div>
          ) : ('')}

          {this.props.button ? (
            <Button text={'LÄS MER'}/>
          ): ('')}
        </div>
      </div>
    );
  }
}

export default Card;
