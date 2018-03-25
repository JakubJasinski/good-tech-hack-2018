import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';
import './thankYouView.css';
import smileyFace from './smileyFace.svg';

class ThankYouView extends Component {
  componentWillMount() {
    this.setState({
      text: "Fortsätt så, det är nära till din nästa analys nu!",
      percent: 83
    });
  }

  updateText = () => {
    this.setState({
      text: "Din analys väntar på dig!",
      percent: 100
    });
    this.props.onComplete();
  }

  render() {
    return (
      <div onClick={this.updateText} className="removeTapFlash">
        <Calendar />
        <div className="thank-you-view-container" >

          <img className="face" src={smileyFace} />

          <p className="uplifting-text">{this.state.text}</p>

          <div className={"analys-progress"+(this.state.percent === 100? " p100" : " p83")}>
            <div className="percent">{this.state.percent + "%"}</div>
            <div className="progress"><div className="actual-progress"></div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYouView;
