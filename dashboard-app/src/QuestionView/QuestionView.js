import React, { Component } from 'react';
import CardSwiper from '../CardSwiper/CardSwiper';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';

class QuestionView extends Component {
  render() {
    return (
      <div>
        <Calendar />

        <div className="container">
          <CardSwiper />
          <Button onClick={() => this.props.changeView('thankYouView')}/>
        </div>
      </div>
    );
  }
}

export default QuestionView;
