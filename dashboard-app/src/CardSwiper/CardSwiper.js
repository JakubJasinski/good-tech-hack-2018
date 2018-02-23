import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Card from '../Card/Card';
import './cardSwiper.scss';

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
        <SwipeableViews disabled={this.state.disabled} enableMouseEvents={true}>
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
