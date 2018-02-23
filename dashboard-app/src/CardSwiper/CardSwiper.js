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

  render() {
    return (
      <div className="card-swiper-container">
        <SwipeableViews disabled={this.state.disabled} style={{padding:'0 20px'}} slideStyle={{padding: '0 8px'}}>
          <Card
            disableSwiper={this.disableSwiper}
            text={'Hur var det att kliva upp ur sängen imorse?'}
            leftOption={'Enkelt'}
            rightOption={'Jobbigt'}
          />
          <Card
            disableSwiper={this.disableSwiper}
            text={'Hur var det att kliva upp ur sängen imorse?'}
            leftOption={'Enkelt'}
            rightOption={'Jobbigt'}
          />
          <Card
            disableSwiper={this.disableSwiper}
            text={'Hur var det att kliva upp ur sängen imorse?'}
            leftOption={'Enkelt'}
            rightOption={'Jobbigt'}
          />
        </SwipeableViews>
      </div>
    );
  }
}

export default CardSwiper;
