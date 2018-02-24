import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from '../Card/Card';
import './cardSwiper.css';

class CardSwiper extends Component {

  componentWillMount() {
    this.setState({
      disabled: false,
    });
  }

  disableSwiper = (disable) => {
    this.setState({disabled:disable})
  };

  fillContent = () => {
    let arr = [];
    this.props.content.forEach((row, index) => {
      arr.push(<Card
        disableSwiper={this.disableSwiper}
        text={this.props.content[index].text}
        leftOption={this.props.content[index].leftOption}
        rightOption={this.props.content[index].rightOption}
        slider={this.props.slider}
        button={row.button}
        smallText={this.props.smallText}
        key={'a'+index}
      />)
    });
    return arr;
  }
  render() {
    return (
      <div className="card-swiper-container">
        <SwipeableViews disabled={this.state.disabled} style={{padding:'0 20px'}} slideStyle={{padding: '0 8px'}}>
          {this.fillContent()}
        </SwipeableViews>
      </div>
    );
  }
}

export default CardSwiper;
