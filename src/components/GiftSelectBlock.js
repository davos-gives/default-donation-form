import React from 'react';
import { formatPrice } from '../helpers';
import GiftAmountSelect from './GiftAmountSelect';

class GiftSelectBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      custom: false,
    }
  }

  state = {
    custom: '',
  }

  updateCustomState = ( newValue ) => {
    let custom = { ...this.state.custom };
    custom = newValue;
    this.setState({ custom });
  }

  render() {
    if(this.props.currentGiftType === 'one-time') {
      return (
        <div>
        <div className={"flex mt-8 w-5/6 ml-8 pl-6"}>
          <GiftAmountSelect
            amount={500}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            amount={1000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            amount={3000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <div className="w-1/6">
          </div>
        </div>
        <div className={"flex mt-8 w-5/6 ml-8 pl-6"}>
          <GiftAmountSelect
            amount={5000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            amount={10000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            isCustom={true}
            setAmount={this.props.amount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <div className="w-1/6">
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div>
        <div className={"flex mt-8 w-5/6 ml-8 pl-6 float-right"}>
          <div className="w-1/6">
          </div>
          <GiftAmountSelect
            amount={500}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            amount={1000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            amount={3000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
        </div>
        <div className={"flex mt-8 w-5/6 ml-8 pl-6 float-right"}>
          <div className="w-1/6">
          </div>
          <GiftAmountSelect
            amount={5000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            amount={10000}
            setAmount={this.props.setAmount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
          <GiftAmountSelect
            isCustom={true}
            setAmount={this.props.amount}
            updateGiftAmount={this.props.updateGiftAmount}
            updateCustomState={this.updateCustomState}
            custom={this.state.custom}
            currentGiftType={this.props.currentGiftType}
          />
        </div>
      </div>
      )
    }

  }
}
export default GiftSelectBlock;
