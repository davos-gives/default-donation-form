import React from 'react';
import { formatPrice } from '../helpers';
import Login from './Login';
import StepTracker from './StepTracker';
import firebase from 'firebase';
import base, { firebaseApp } from '../base';

class Step2 extends React.Component {

  authHandler = async (authData) => {
    this.props.loadUser(authData.user.uid);
  }

  authenticate = (credentials) => {
    console.log(credentials);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(credentials.username, credentials.password) //password should be testing123
      .then(this.authHandler)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5 -mt-32">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
          <div className="w-2/3 p-6 mr-8 mt-8 mx-8">
            <StepTracker />
              <div className="flex mt-8">
                <div className="w-3/5 mx-auto pl-8">
                  <div className="bg-purple text-white rounded-lg pt-6 text-center pb-4 flex overflow-hidden relative">
                    <span className="inline-block flex-1 pt-3">You are donating</span>
                    <div className="flex-1 mb-4">
                      <span className="text-4xl font-semibold block">{formatPrice(this.props.gift.amount)}</span>
                      <span className="text-xs -mt-6">As a {this.props.gift.frequency} gift.</span>
                      <img src="/Davos_icon.svg" className="background-logo ml-4" />
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </div>
              </div>
              <Login authenticate={this.authenticate} skipLogin={this.props.skipLogin} goBack={this.props.goBack} />


          </div>
          <div className="w-1/3">
            <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;
