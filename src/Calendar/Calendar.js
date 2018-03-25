import React, { Component } from 'react';
import './calendar.css';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar-container">
        <div className="calendar-item">Th<br /> 22</div>
        <div className="calendar-item">Fr<br /> 23</div>
        <div className="calendar-item active">Today <br />24</div>
        <div className="calendar-item">Su<br /> 25</div>
        <div className="calendar-item">Mo<br /> 26</div>
      </div>
    );
  }
}

export default Calendar;
