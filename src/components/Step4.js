import React from 'react';
import PaymentForm from './PaymentForm';
import ButtonBlock from './ButtonBlock';
import StoredCard from './StoredCard';


class Step4 extends React.Component {

  render() {

    if(this.props.loggedIn) {
      return (
        <div className="mx-auto font-sans container w-3/5 -mt-32">
          <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
            <div className="w-2/3 p-6 mr-8 mt-8 mx-8">
              <h1 className="text-purple-darkest text-3xl flex align-middle">
                <span className="bg-purple-darkest text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">3</span>
                Payment
              </h1>
              <div className="flex mt-8 mr-8">
                <div className="w-1/8">
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="font-bold text-grey-darker text-sm">Gift Options</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Personal Info</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">payment</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Review</p>
                </div>
              </div>
              <div className="mx-8 mt-8">

                <StoredCard card={this.props.cards['visa']} selected={this.props.visaActive} selectVisa={this.props.selectVisa}/>
                <StoredCard card={this.props.cards['mastercard']} selected={this.props.mastercardActive} selectMastercard={this.props.selectMastercard} />

                <div className="mx-8 mt-8 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-6 pb-5 text-lg text-center border-b-4 flex">
                  <div className="w-full flex justify-center">
                    <img src="/plus.png" className=""/>
                    <p className="mx-8 align-left mr-8 pr-8">Add a new payment method</p>
                  </div>
                </div>
              </div>
              <ButtonBlock
                handleClick={this.props.updateSavedPayment}
                inReview={this.props.inReview}
                formValid={true}
              />
            </div>
            <div className="w-1/3">
              <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="mx-auto font-sans container w-3/5 -mt-32">
          <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
            <div className="w-2/3 p-6 mr-8 mt-8 mx-8">
              <h1 className="text-purple-darkest text-3xl flex align-middle">
                <span className="bg-purple-darkest text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">3</span>
                Payment
              </h1>
              <div className="flex mt-8 mr-8">
                <div className="w-1/8">
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="font-bold text-grey-darker text-sm">Gift Options</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Personal Info</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">payment</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Review</p>
                </div>
              </div>
                <PaymentForm
                  updatePaymentInformation={this.props.updatePaymentInformation}
                  goBack={this.props.goBack}
                  inReview={this.props.inReview}
                />
            </div>
            <div className="w-1/3">
              <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Step4;
