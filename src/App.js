import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import GiftOptions from './components/GiftOptions';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import base from './base';
import uuidv1 from 'uuid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transaction: {
        uuid: uuidv1(),
        inReview: false,
      }
    }
  }

  state = {
    transaction: {},
    donation: {},
    donor: {},
    payment: {},
  }

  componentWillMount() {
    this.setState({
      donation: JSON.parse(localStorage.getItem('donation')),
      donor: JSON.parse(localStorage.getItem('donor')),
      payment: JSON.parse(localStorage.getItem('payment'))
    });
  }

  componentDidUpdate() {
    localStorage.setItem('donation', JSON.stringify(this.state.donation));
    localStorage.setItem('donor', JSON.stringify(this.state.donor));
    localStorage.setItem('payment', JSON.stringify(this.state.payment));
  }

  componentWillUnmount() {
  }

  submitDonationInformation = (updatedDonation, nextLocation) => {
    const donor = {...this.state.donation};
    this.setState({
      donation: {
        amount: updatedDonation.amount,
        frequency: updatedDonation.frequency,
      }
    });

    if(nextLocation == 'next') {
      this.props.history.push(`/step/2`);
    } else {
      this.props.history.push(`/step/5`);
    }
  }

  updatePersonalInformation = (formState, nextLocation) => {
    this.setState({
      donor: formState
    });

    if(nextLocation == 'next') {
      this.props.history.push(`/step/4`);
    } else {
      this.props.history.push(`/step/5`);
    }
}

  updatePaymentInformation = (formState, nextLocation) => {
    this.setState({
      payment: formState
    })

    if(nextLocation == 'next') {
      this.props.history.push(`/step/5`);
    } else {
      this.props.history.push(`/step/5`);
    }
  }

  submitFormToFirebase = () => {
    base.post(`donations/${this.state.transaction.uuid}`, {
      data: { donation: this.state.donation, donor: this.state.donor, payment: this.state.payment }
    }).then(() => {
      localStorage.removeItem('donation');
      localStorage.removeItem('donor');
      localStorage.removeItem('payment');
    }).catch(err => {
   // handle error
    });
  }

  skipLogin = () => {
    this.props.history.push(`/step/3`);
  }

  goBack = () => {
    this.props.history.goBack();
  }

  goToPage = (pageNumber) => {
    this.props.history.push(`/step/${pageNumber}`);
  }

  toggleInReview = () => {
    const transaction = { ...this.state.transaction }
    transaction['inReview'] = true;
    this.setState({ transaction });
  }

  render() {
    let { params } = this.props.match;

    switch(params.stepId) {
      case '1':
        return (
          <GiftOptions
            addInfoToDonation={this.submitDonationInformation}
            inReview={this.state.transaction.inReview}
           />
        );
      case '2':
        return (<Step2
          goBack={this.goBack}
          skipLogin={this.skipLogin}
          gift={this.state.donation}
          inReview={this.state.transaction.inReview}
        />);
      case '3':
        return (<Step3
          goBack={this.goBack}
          updatePersonalInformation={this.updatePersonalInformation}
          inReview={this.state.transaction.inReview}
        />);
      case '4':
        return (<Step4
          goBack={this.goBack}
          updatePaymentInformation={this.updatePaymentInformation}
          inReview={this.state.transaction.inReview}
        />);
      case '5':
        return (<Step5
          state={this.state}
          goBack={this.goBack}
          submitForm={this.submitFormToFirebase}
          linkTo={this.goToPage}
          toggleInReview={this.toggleInReview}
          inReview={this.state.transaction.inReview}
         />);
      default:
        return (<GiftOptions
          addInfoToDonation={this.submitDonationInformation}
          inReview={this.state.transaction.inReview}
        />);
    }
  }
}

export default App;
