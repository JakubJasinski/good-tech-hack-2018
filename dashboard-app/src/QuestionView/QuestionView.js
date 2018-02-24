import React, { Component } from 'react';
import CardSwiper from '../CardSwiper/CardSwiper';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';

class QuestionView extends Component {
  render() {
    return (
      <div>
        <Calendar />

        <CardSwiper />
        
        <div className="container">
          <Button onClick={this.props.onComplete}/>
        </div>
      </div>
    );
  }
}

export default QuestionView;
