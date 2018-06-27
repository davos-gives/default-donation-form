import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import GiftOptions from './components/GiftOptions';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import base from './base';

class App extends Component {

  state = {
    donation: {},
    donor: {},
    payment: {},
  }

  componentDidUpdate() {
    localStorage.setItem('donation', JSON.stringify(this.state.donation));
  }

  submitDonationInformation = (updatedDonation) => {
    const donor = {...this.state.donation};
    this.setState({
      donation: {
        amount: updatedDonation.amount,
        frequency: updatedDonation.frequency,
      }
    });
    this.props.history.push(`/step/2`);
  }

  updatePersonalInformation = (formState) => {
    this.setState({
      donor: formState
    })
    this.props.history.push(`/step/4`);
  }

  updatePaymentInformation = (formState) => {
    this.setState({
      payment: formState
    })
    this.props.history.push(`/step/5`);
  }

  skipLogin = () => {
    this.props.history.push(`/step/3`);
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    let { params } = this.props.match;

    switch(params.stepId) {
      case '1':
        return (
          <GiftOptions
            addInfoToDonation={this.submitDonationInformation} />
        );
      case '2':
        return (<Step2
          goBack={this.goBack}
          skipLogin={this.skipLogin}
        />);
      case '3':
        return (<Step3
          goBack={this.goBack}
          updatePersonalInformation={this.updatePersonalInformation}
        />);
      case '4':
        return (<Step4
          goBack={this.goBack}
          updatePaymentInformation={this.updatePaymentInformation}
        />);
      case '5':
        return (<Step5
          state={this.state}
          goBack={this.goBack}
         />);
      default:
        return (<GiftOptions
          addInfoToDonation={this.submitDonationInformation}
        />);
    }
  }
}

export default App;
