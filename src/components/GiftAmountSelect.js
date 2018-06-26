import React from 'react';
import { formatPrice } from '../helpers';

class GiftAmountSelect extends React.Component {

  handleChange = event => {
    let newValue = (event.currentTarget.value * 100);
    this.props.updateGiftAmount(newValue);
    this.props.updateCustomState(true);
  }

  handleClick = () => {
    this.props.updateGiftAmount(this.props.amount);
    this.props.updateCustomState(false);
  }

  render() {
    if(this.props.isCustom === true) {
      if(this.props.custom === true) {
        return (
          <div className="w-1/3">
            <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 pt-6 pb-5 text-lg text-center border-b-4 font-bold border-purple">
              <input type="number" placeholder="Custom" onChange={this.handleChange}/>
            </div>
          </div>
        )
      } else {
      return (
        <div className="w-1/3">
          <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 pt-6 py-6 text-lg text-center">
            <input type="number" placeholder="Custom" onChange={this.handleChange}/>
          </div>
        </div>
      )
    }
  }

    if(this.props.amount === this.props.setAmount) {
      return (
      <div className="w-1/3">
        <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 pt-6 pb-5 text-lg text-center border-b-4 font-bold border-purple" onClick={this.handleClick}>
          {formatPrice(this.props.amount)}
        </div>
      </div>
      )
    }
      return (
        <div className="w-1/3">
          <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 py-6 text-lg text-center" onClick={this.handleClick}>
            {formatPrice(this.props.amount)}
          </div>
        </div>
      )
  }

}

export default GiftAmountSelect;
