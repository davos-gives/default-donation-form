import React from 'react';
import GiftAmountDisplay from './GiftAmountDisplay';
import GiftSelectBlock from './GiftSelectBlock';
import StepTracker from './StepTracker';

class GiftOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 1000,
      frequency: 'one-time',
    }
  }

  state = {
    amount: '',
    frequency: '',
  }

  handleClick = () => {
    this.props.addInfoToDonation(this.state);
  }

  updateGiftAmount = ( newValue ) => {
    let amount = { ...this.state.amount }
    amount = newValue;
    this.setState({ amount });
  }

  updateGiftType = ( newValue ) => {
    let type = { ...this.state.frequency }
    type = newValue;
    this.setState({ frequency: type });
  }

  updateFrequency = ( newValue ) => {
    let frequency = { ...this.state.frequency }
    frequency = newValue;
    this.setState({ frequency });
  }

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5 mt-8 pt-8">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
          <div className="w-2/3 p-6 mr-8">
            <StepTracker />
            <div className="flex mt-8">
              <GiftAmountDisplay
                type="one-time"
                currentGiftType={this.state.frequency}
                amount={this.state.amount}
                updateGiftType={this.updateGiftType}
              />
              <GiftAmountDisplay
                type="recurring"
                currentGiftType={this.state.frequency}
                amount={this.state.amount}
                updateGiftType={this.updateGiftType}
                frequency={this.state.frequency}
                updateFrequency={this.updateFrequency}
              />
            </div>
            <GiftSelectBlock
              currentGiftType={this.state.frequency}
              setAmount={this.state.amount}
              updateGiftAmount={this.updateGiftAmount}
              updateCustomState={this.updateCustomState}
            />
            <button className="rounded-full bg-purple text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-8 float-right" onClick={this.handleClick}>Next</button>
          </div>
          <div className="w-1/3">
            <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
          </div>
        </div>
      </div>
    )
  }
}

export default GiftOptions;
