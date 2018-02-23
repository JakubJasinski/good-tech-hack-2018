import React, { Component } from 'react';
import './calendar.css';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar-container">
        <div className="calendar-item">To<br /> 21</div>
        <div className="calendar-item">Fr<br /> 22</div>
        <div className="calendar-item active">Idag <br />23</div>
        <div className="calendar-item">Sö<br /> 24</div>
        <div className="calendar-item">Må<br /> 25</div>
      </div>
    );
  }
}

export default Calendar;
