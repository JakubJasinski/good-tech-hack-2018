import React, { Component } from 'react';
import CardSwiper from '../CardSwiper/CardSwiper';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';
import './questionView.css';

class QuestionView extends Component {
  render() {
    const content = [
      {text: 'How was it to get out of bed this morning?', leftOption: 'Easy', rightOption:'Hard'},
      {text: 'How has your energy level been today?', leftOption: 'Low', rightOption:'High'},
      {text: 'How well did you sleep tonight?', leftOption: 'Good', rightOption:'Bad'},
    ];
    return (
      <div>
        <Calendar />

        <CardSwiper content={content} slider={true} />

        <div className="container">
          <Button onClick={this.props.onComplete} text={'FINISHED TODAY'}/>
        </div>
      </div>
    );
  }
}

export default QuestionView;
