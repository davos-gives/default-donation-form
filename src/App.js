import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import GiftOptions from './components/GiftOptions';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';
import base, { firebaseApp } from './base';
import uuidv1 from 'uuid';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transaction: {
        uuid: uuidv1(),
        inReview: false,
        loggedIn: false,
      }
    }
  }

  state = {
    transaction: {},
    donation: {},
    donor: {},
    payment: {},
    addresses: {},
    cards: {},
  }

  componentWillMount() {
    this.setState({
      donation: JSON.parse(localStorage.getItem('donation')),
      donor: JSON.parse(localStorage.getItem('donor')),
      payment: JSON.parse(localStorage.getItem('payment')),
      cards: JSON.parse(localStorage.getItem('cards')),
      addresses: JSON.parse(localStorage.getItem('addresses')),
    });
  }

  componentDidUpdate() {
    localStorage.setItem('donation', JSON.stringify(this.state.donation));
    localStorage.setItem('donor', JSON.stringify(this.state.donor));
    localStorage.setItem('payment', JSON.stringify(this.state.payment));
    localStorage.setItem('transaction', JSON.stringify(this.state.transaction));
    localStorage.setItem('cards', JSON.stringify(this.state.cards));
    localStorage.setItem('addresses', JSON.stringify(this.state.addresses));
  }

  componentWillUnmount() {
    firebaseApp
      .auth()
      .signOut()
  }

  submitDonationInformation = (updatedDonation, nextLocation) => {
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

  loadUser = async (uid) => {
    const donor  = { ...this.state.donor};
    const payment = { ...this.state.payment};
    const cards = { ...this.state.cards};

    donor['uid'] = uid;

    await base.fetch(`${uid}`, {
    }).then(data => {
      donor['fname'] = data.fname;
      donor['lname'] = data.lname;
      donor['email'] = data.email;
    })

    await base.fetch('addresses', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'owner',
        equalTo: uid,
      }
    }).then(data => {
      this.storeAddresses(data);
    })

    await base.fetch('saved-cards', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'owner',
        equalTo: uid,
      }
    }).then(data => {
      this.storeCards(data);
    })

    await this.setDefaults(donor);
    await this.props.history.push(`/step/5`);
    await this.setLoggedIn();
  }

  setLoggedIn = () => {
    let transaction = { ...this.state.transaction }
    transaction.loggedIn = true;
    this.setState({ transaction });
  }

  setDefaults = (donor) => {
    for(var key in this.state.addresses['home']) {
        donor[`${key}`] = this.state.addresses['home'][key];
      }
    this.setState({ donor });
    this.setState({ payment: {
      card: {
        value: this.state.cards['visa']['number']
      },
      cvv: {
        value: this.state.cards['visa']['cvv']
      },
      expiry: {
        month: this.state.cards['visa']['expiryMonth'],
        year: this.state.cards['visa']['expiryYear']
      }
    }
  })
  }

  storeCards = (cardArray) => {
    cardArray.forEach(card => {
      let cards = {};
      for(var key in card) {
          cards[`${key}`] = card[key];
        }
      this.addCardToState(cards)
      })
  }

  storeAddresses = (addressArray) => {
    addressArray.forEach(address => {
      let addresses = {};
      for(var key in address) {
          addresses[`${key}`] = address[key];
        }
      this.addAddressToState(addresses)
      })
  }

  addAddressToState = ( address ) => {
    const addresses = {...this.state.addresses }
    addresses[`${address['name']}`] = address;
    this.setState({ addresses })
  }

  addCardToState = (card) => {
    const cards = { ...this.state.cards }
    cards[`${card['type']}`] = card;
    this.setState({ cards });
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
      localStorage.removeItem('transaction');
      localStorage.removeItem('cards');
      localStorage.removeItem('addresses');
      this.props.history.push('/thanks');
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
          <div>
            <Header />
            <Info />
            <GiftOptions
              addInfoToDonation={this.submitDonationInformation}
              inReview={this.state.transaction.inReview}
             />
             <Footer />
         </div>
        );
      case '2':
        return (
          <div>
            <Header />
            <Info />
            <Step2
              goBack={this.goBack}
              skipLogin={this.skipLogin}
              gift={this.state.donation}
              inReview={this.state.transaction.inReview}
              loadUser={this.loadUser}
            />
             <Footer />
          </div>
          );
      case '3':
        return (
          <div>
            <Header />
            <Info />
            <Step3
              goBack={this.goBack}
              updatePersonalInformation={this.updatePersonalInformation}
              inReview={this.state.transaction.inReview}
              loggedIn={this.state.transaction.loggedIn}
            />
            <Footer />
          </div>
          );
      case '4':
        return (
          <div>
          <Header />
          <Info />
          <Step4
            goBack={this.goBack}
            updatePaymentInformation={this.updatePaymentInformation}
            inReview={this.state.transaction.inReview}
            loggedIn={this.state.transaction.loggedIn}
          />
          <Footer />
        </div>
        );
      case '5':
        return (
          <div>
            <Header />
            <Info />
            <Step5
              state={this.state}
              goBack={this.goBack}
              submitForm={this.submitFormToFirebase}
              linkTo={this.goToPage}
              toggleInReview={this.toggleInReview}
              inReview={this.state.transaction.inReview}
              loggedIn={this.state.transaction.loggedIn}
            />
            <Footer />
          </div>
       );
      default:
        return (
          <div>
            <Header />
            <Info />
            <GiftOptions
              addInfoToDonation={this.submitDonationInformation}
              inReview={this.state.transaction.inReview}
             />
             <Footer />
           </div>
         );
    }
  }
}

export default App;
