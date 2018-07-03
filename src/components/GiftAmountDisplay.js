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

  render() {
    const { type, currentGiftType, amount, frequency } = this.props;
    const options = [
      {value: 'daily', label: 'daily'},
      {value: 'weekly', label: 'weekly'},
      {value: 'bi-weekly', label: 'bi-weekly'},
      {value: 'monthly', label: 'monthly'},
    ]

    if(type === 'one-time') {

      if(type === currentGiftType) {
        return (
          <div className="w-1/2">
            <div className="ml-8 bg-orange text-white w-64 rounded-lg pt-8 text-center float-right pb-4" onClick={() => this.props.updateGiftType(type)}>
              <span className="text-5xl font-bold block pb-2">{formatPrice(amount)}</span>
              <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4 capitalize">{type} gift</span>
            </div>
          </div>
        )
      } else {
        return (
          <div className="w-1/2">
            <div className="bg-white ml-8 text-grey-darker w-64 rounded-lg pt-8 text-center float-right pb-4 shadow-md" onClick={() => this.props.updateGiftType(type)}>
              <span className="text-5xl font-bold block pb-2">$</span>
              <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4 capitalize">{type} gift</span>
            </div>
          </div>
        )
      }

    } else {

      if(currentGiftType !== 'one-time') {
        return (
          <div className="w-1/2">
            <div className="bg-orange text-white w-64 rounded-lg pt-8 text-center float-right pb-5" onClick={() => this.props.updateGiftType(type)}>
              <span className="text-5xl font-bold block pb-2">{formatPrice(amount)}</span>
              <Select className="capitalize bg-orange" options={options} clearable={false} searchable={false} value={this.state.recurringFrequency} placeholder="select an option" onChange={this.updateFrequency}/>
            </div>
          </div>
        )
      } else {
        return (
          <div className="w-1/2">
            <div className="bg-white text-grey-darker w-64 rounded-lg pt-8 text-center float-right pb-5 shadow-md" onClick={() => this.props.updateGiftType(type)}>
              <span className="text-5xl font-bold block pb-2">$</span>
              <Select clearable={false} className="capitalize" options={options} searchable={false} value={this.state.recurringFrequency} placeholder="select an option" onChange={this.updateFrequency}/>
            </div>
          </div>
        )
      }

    }
  }

}

export default GiftAmountDisplay;
