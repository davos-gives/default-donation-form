import React from 'react';
import GiftAmountDisplay from './GiftAmountDisplay';
import GiftSelectBlock from './GiftSelectBlock';
import StepTracker from './StepTracker';
import ButtonBlock from './ButtonBlock';

class GiftOptions extends React.Component {

  constructor(props) {
    super(props);

    let donationInfo = JSON.parse(localStorage.getItem('donation'));

    if(donationInfo) {
      this.state = {
        amount: donationInfo.amount,
        frequency: donationInfo.frequency,
      }
    } else {
      this.state = {
        amount: 1000,
        frequency: 'one-time',
      }
    }
  }

  state = {
    amount: '',
    frequency: '',
  }

  handleClick = (newLocation) => {
    this.props.addInfoToDonation(this.state, newLocation);
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
      <div className="mx-auto font-sans container w-3/5 -mt-32">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center forced-height">
          <div className="w-2/3 p-6 mr-8 mt-8 mx-8">
            <StepTracker />
            <div className="flex justify-around w-full mx-auto mt-8">
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
            <div className="w-5/6 mx-auto">
              <GiftSelectBlock
                currentGiftType={this.state.frequency}
                setAmount={this.state.amount}
                updateGiftAmount={this.updateGiftAmount}
                updateCustomState={this.updateCustomState}
              />
              <ButtonBlock
                handleClick={this.handleClick}
                inReview={this.props.inReview}
                formValid={true}
              />
            </div>
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
