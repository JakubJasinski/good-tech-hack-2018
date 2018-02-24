import React, { Component } from 'react';
import CardSwiper from '../CardSwiper/CardSwiper';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';

class QuestionView extends Component {
  render() {
    const content = [
      {text: 'Hur var det att kliva upp ur sängen imorse?', leftOption: 'Lätt', rightOption:'Svårt'},
      {text: 'Hur var det att kliva upp ur sängen imorse?', leftOption: 'Lätt', rightOption:'Svårt'},
      {text: 'Hur var det att kliva upp ur sängen imorse?', leftOption: 'Lätt', rightOption:'Svårt'},
    ];
    return (
      <div>
        <Calendar />

        <CardSwiper content={content} slider={true} />

        <div className="container">
          <Button onClick={() => this.props.changeView('thankYouView')} text={'KLAR MED DAGEN'} />
        </div>
      </div>
    );
  }
}

export default QuestionView;
