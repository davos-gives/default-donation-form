import React from 'react';
import { formatPrice } from '../helpers';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class GiftAmountDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recurringFrequency: 'monthly',
    }
  }

  state = {
    recurringFrequency: '',
  }

  updateFrequency = (event) => {
    this.props.updateFrequency(event.value)
    this.setState({
      recurringFrequency: event.value
    });
  }

  onBlur () {
    console.log('should be closing?');
  }

  render() {
    const { type, currentGiftType, amount, frequency, onBlur } = this.props;
    const options = [
      {value: 'daily', label: 'daily'},
      {value: 'weekly', label: 'weekly'},
      {value: 'bi-weekly', label: 'bi-weekly'},
      {value: 'monthly', label: 'monthly'},
    ]

    if(type === 'one-time') {

      if(type === currentGiftType) {
        return (
          <div className="gift-options">
            <div className="bg-orange text-white w-full rounded-lg pt-8 text-center pb-4">
              <span className="text-5xl font-bold block pb-2">{formatPrice(amount)}</span>
              <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4 capitalize">{type} gift</span>
            </div>
          </div>
        )
      } else {
        return (
          <div className="gift-options">
            <div className="bg-white text-grey-darker w-full rounded-lg pt-8 text-center pb-4 shadow-md" onClick={() => this.props.updateGiftType(type)}>
              <span className="text-5xl font-bold block pb-2">$</span>
              <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4 capitalize">{type} gift</span>
            </div>
          </div>
        )
      }

    } else {

      if(currentGiftType !== 'one-time') {
        return (
          <div className="gift-options">
            <div className="bg-orange text-white w-full rounded-lg pt-8 text-center pb-6">
              <span className="text-5xl font-bold block pb-2">{formatPrice(amount)}</span>
              <Select className="capitalize bg-orange" options={options} clearable={false} isDisabled={true} searchable={false} value={this.state.recurringFrequency} placeholder="select an option" onChange={this.updateFrequency}/>
            </div>
          </div>
        )
      } else {
        return (
          <div className="gift-options">
            <div className="bg-white text-grey-darker w-full rounded-lg pt-8 text-center pb-4 shadow-md" onClick={() => this.props.updateGiftType(type)}>
              <span className="text-5xl font-bold block pb-2">$</span>
              <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4 capitalize">Ongoing gift</span>
            </div>
          </div>
        )
      }

    }
  }

}

export default GiftAmountDisplay;
