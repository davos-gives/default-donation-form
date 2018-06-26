import React from 'react';
import { formatPrice } from '../helpers';


class GiftAmountDisplay extends React.Component {

  render() {
    if(this.props.type === 'one-time') {
      return (
        <div className="w-1/2">
          <div className="bg-purple text-white w-64 rounded-lg pt-8 text-center float-right pb-4">
            <span className="text-5xl font-bold block pb-2">{formatPrice(this.props.amount)}</span>
            <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4">One-time gift</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="w-1/2">
          <div className="bg-purple text-white w-64 rounded-lg pt-8 text-center float-right pb-4">
            <span className="text-5xl font-bold block pb-2">$10</span>
            <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4">Monthly Gift</span>
          </div>
        </div>
      )
    }

  }

}

export default GiftAmountDisplay;
