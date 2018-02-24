import React, { Component } from 'react';
import './AnalyticsView.css';
import CardSwiper from '../CardSwiper/CardSwiper';

class AnalyticsView extends Component {
  render() {
    const content = [
      {text: 'Ta dig lite tid och klura ut vilka arbetsuppgifter som du tycker var roligast och gav dig mest energi i slutet på månaden. Fortsätt med dem!', leftOption: 'Lätt', rightOption:'Svårt'},
      {text: 'Prioritera din sömn! Sömnen har stor betydelse för din generella hälsa då sömnbrist kan resultera i sämre humör, nedsatt immunförsvar och orkeslöshet.', leftOption: 'Lätt', rightOption:'Svårt'},
      {text: 'Känner du att du kanske är i förstadiet till utmattningssyndrom?', leftOption: 'Lätt', rightOption:'Svårt', button:true},
    ];
    return (
      <div className="analytics-view-container">
        <div className="container">
          <h5>Senaste Månaden</h5>
          <p>Under slutet av månaden har du haft mer energi</p>

          <div className="graph-container">
            <div className="graph g1"></div>
            <p>Title 1</p>

            <div className="graph g2"></div>
            <p>Title 2</p>

            <div className="graph g3"></div>
            <p>Title 3</p>
          </div>

          <h5>Dina Tips</h5>
          <CardSwiper content={content} slider={false} smallText={true} />
        </div>
      </div>
    );
  }
}

export default AnalyticsView;
