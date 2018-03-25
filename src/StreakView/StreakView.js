import React, { Component } from 'react';
import './streakView.css';
import diagonalBG from './diagonal-bg.svg';
import winkyFace from './winkyFace.svg';

class StreakView extends Component {
  render() {
    return (
      <div className={"streak-view-container"
          +(this.props.enabled? "": " disabled")
          +(this.props.removed? " removed": "")
        }>
        <div className={"streak-modal card"+(this.props.enabled? "": " disabled")}>

          <img className="face" src={winkyFace} />
          <div className="text">Good work, you now have a 7 day streak!</div>
          <img className="diagonal-bg" src={diagonalBG} />
        </div>
      </div>
    );
  }
}

export default StreakView;
