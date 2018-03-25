import React, { Component } from 'react';
import './AnalyticsView.css';
import CardSwiper from '../CardSwiper/CardSwiper';

class AnalyticsView extends Component {

  componentWillMount() {
    this.setState({
      view: true,
    })
  }
  fillContent = () => {
    let arr = [];
    if(this.state.view) {
      this.content1.forEach((field, index) => {
        arr.push(
          <div key={"sf"+index}>
            <div className={field.class} />
            <p>{field.text}</p>
          </div>
        )
      });
    }
    else {
      this.content2.forEach((field, index) => {
        arr.push(
          <div key={"ss"+index}>
            <div className={field.class} />
            <p>{field.text}</p>
          </div>
        )
      });
    }
    return arr;
  }

  updateView = () => {
    let view = this.state.view;
    this.setState({
      view: !view,
    })
  }
  render() {
    const cardContent1 = [
      {text: 'Take some time and figure out which tasks you think were fun and gave you the most energy at the end of the month. Continue with them!', leftOption: 'Easy', rightOption:'Hard'},
      {text: 'Prioritize your sleep! Sleep is very important to your general health, as sleep deprivation can result in poor mood, impaired immune system and powerlessness.', leftOption: 'Lätt', rightOption:'Svårt'},
    ];

    const cardContent2 = [
      {text: 'Do you feel that you may be in the pretext of fatigue syndrome?', leftOption: 'Lätt', rightOption:'Svårt', button:true},
    ];

    this.content1 = [
      {text: 'By the end of the month you have had more energy',
        class: 'graph g1'},
        {text: 'Throughout the month you have kept yourself healthy',
          class: 'graph g2'},
          {text: 'You have had an irregular sleep',
            class: 'graph g3'},
          ];
    this.content2 = [
      {text: 'Your energy level has been low throughout the month',
        class: 'graph g4'},
        {text: 'Your state of health has been low',
          class: 'graph g5'},
          {text: 'The sleep this month has been insufficient',
            class: 'graph g6'},
          ];

    return (
      <div className="analytics-view-container">
        <div className="container">
          <div onClick={() => this.updateView()} className="removeTapFlash">
            <h5>Last Month</h5>

            <div className="graph-container">
            {this.fillContent()}
            </div>
            <h5 className="bottom">Your Tips</h5>
          </div>
          {this.state.view ? (
            <CardSwiper content={cardContent1} slider={false} smallText={true} key="b1"/>
          ) : (
            <CardSwiper content={cardContent2} slider={false} smallText={true} key="b2" index={0} />
          )}
        </div>
      </div>
    );
  }
}

export default AnalyticsView;
