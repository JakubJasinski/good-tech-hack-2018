import React, { Component } from 'react';
import './thankYouView.css';
import smileyFace from './smileyFace.svg';

class ThankYouView extends Component {

  render() {
    return (
      <div className="thank-you-view-container">
        <img className="face" src={smileyFace} />

        <p className="uplifting-text">Fortsätt så, det är nära till din nästa analys nu!</p>

        <div className="analys-progress">
          <div className="percent">83%</div>
          <div className="progress"><div className="actual-progress"></div></div>
        </div>
      </div>
    );
  }
}

export default ThankYouView;
