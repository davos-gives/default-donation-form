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
  }

  componentDidUpdate() {
    localStorage.setItem('donation', JSON.stringify(this.state.donation));
  }

  addInfoToDonation = (updatedDonation) => {
    const donor = {...this.state.donation};
    this.setState({
      donation: {
        amount: updatedDonation.amount,
        frequency: updatedDonation.frequency,
      }
    });
  }

  render() {
    let { params } = this.props.match;

    switch(params.stepId) {
      case '1':
        return (
          <GiftOptions
            addInfoToDonation={this.addInfoToDonation} />
        );
      case '2':
        return (<Step2 />);
      case '3':
        return (<Step3 />);
      case '4':
        return (<Step4 />);
      case '5':
        return (<Step5 />);
      default:
        return (<GiftOptions
          addInfoToDonation={this.addInfoToDonation}
        />);
    }
  }
}

export default App;
