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

  handleCustomClick = () => {
    console.log('running');
    this.props.updateCustomState(true);
  }


  floatPosition = () => {
    return ((this.props.currentGiftType == 'one-time') ? 'float-left' : 'float-right' )
  }

  render() {
    if(this.props.isCustom === true) {
      if(this.props.custom === true) {
        return (
          <div className="w-1/3">
            <div className={"bg-white shadow-md rounded-lg text-grey-darker w-29 pt-6 pb-5 text-lg text-center border-b-4 font-bold border-orange " + this.floatPosition()} onClick={this.handleCustomClick}>
              <input className="text-grey-darker font-bold w-20 border-none ml-2 outline-none" type="text" value={this.props.amount} placeholder="Custom" onChange={this.handleChange}  />
            </div>
          </div>
        )
      } else {
      return (
        <div className="w-1/3">
          <div className={"bg-white shadow-md rounded-lg text-grey-darker w-29 pt-6 py-6 text-lg text-center font-bold border-orange " + this.floatPosition()} onClick={this.handleCustomClick}>
            <input className="text-grey-darker font-bold w-20 border-none ml-2 text-center outline-none" value={this.props.amount} type="string" placeholder="Custom" onChange={this.handleChange} />
          </div>
        </div>
      )
    }
  }

    if(this.props.amount === this.props.setAmount && !this.props.custom) {
      return (
      <div className="w-1/3">
        <div className={"bg-white shadow-md rounded-lg text-grey-darker w-29 pt-6 pb-5 text-lg text-center border-b-4 font-bold border-orange cursor-pointer " + this.floatPosition()} onClick={this.handleClick}>
          {formatPrice(this.props.amount)}
        </div>
      </div>
      )
    }
      return (
        <div className="w-1/3">
          <div className={"bg-white shadow-md rounded-lg text-grey-darker w-29 py-6 text-lg text-center cursor-pointer " + this.floatPosition()} onClick={this.handleClick}>
            {formatPrice(this.props.amount)}
          </div>
        </div>
      )
  }

}

export default GiftAmountSelect;
