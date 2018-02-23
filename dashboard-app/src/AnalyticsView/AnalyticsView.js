import React, { Component } from 'react';
import './AnalyticsView.css';
import CardSwiper from '../CardSwiper/CardSwiper';

class AnalyticsView extends Component {
  render() {
    return (
      <div className="analytics-view-container">
        <div className="container">
          <h5>Senaste Månaden</h5>
          <p>Under slutet av månaden har du haft mer energi</p>

          <div className="graph-container">
            <div className="graph"></div>
            <p>Title 1</p>

            <div className="graph"></div>
            <p>Title 2</p>

            <div className="graph"></div>
            <p>Title 3</p>
          </div>

          <h5>Dina Tips</h5>
          <CardSwiper />
        </div>
      </div>
    );
  }
}

export default AnalyticsView;
