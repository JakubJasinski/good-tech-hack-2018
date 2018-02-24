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
          <div>
            <div className={field.class} />
            <p>{field.text}</p>
          </div>
        )
      });
    }
    else {
      this.content2.forEach((field, index) => {
        arr.push(
          <div>
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
      {text: 'Ta dig lite tid och klura ut vilka arbetsuppgifter som du tycker var roligast och gav dig mest energi i slutet på månaden. Fortsätt med dem!', leftOption: 'Lätt', rightOption:'Svårt'},
      {text: 'Prioritera din sömn! Sömnen har stor betydelse för din generella hälsa då sömnbrist kan resultera i sämre humör, nedsatt immunförsvar och orkeslöshet.', leftOption: 'Lätt', rightOption:'Svårt'},
    ];

    const cardContent2 = [
      {text: 'Känner du att du kanske är i förstadiet till utmattningssyndrom?', leftOption: 'Lätt', rightOption:'Svårt', button:true},

    ];

    this.content1 = [
      {text: 'Under slutet av månaden har du haft mer energi',
        class: 'graph g1'},
        {text: 'Hela månaden har du hållit dig frisk',
          class: 'graph g2'},
          {text: 'Du har haft en oregelbunden sömn',
            class: 'graph g3'},
          ];
    this.content2 = [
      {text: 'Din energinivå har varit låg genom hela månaden',
        class: 'graph g4'},
        {text: 'Ditt hälsotillstånd har varit lågt',
          class: 'graph g5'},
          {text: 'Sömnen den här månaden har varit otillräcklig',
            class: 'graph g6'},
          ];

    return (
      <div className="analytics-view-container" onClick={() => this.updateView()}>
        <div className="container">
          <h5>Senaste Månaden</h5>

          <div className="graph-container">
          {this.fillContent()}
          </div>
          <h5 className="bottom">Dina Tips</h5>
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
