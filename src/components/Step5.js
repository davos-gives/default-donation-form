import React from 'react';
import { formatPrice, shortenCreditCard } from '../helpers.js';

class Step5 extends React.Component {

  componentWillMount() {
    this.setInReviewFlag();
  }

  setInReviewFlag = () => {
    this.props.toggleInReview();
  }


  render() {
    const { donation, donor, payment } = this.props.state;

    return (
      <div className="mx-auto font-sans container w-3/5 -mt-32">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
          <div className="w-2/3 p-6 mr-8 mt-8 mx-8">
            <h1 className="text-purple-darkest text-3xl flex align-middle">
              <span className="bg-purple-darkest text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">4</span>
              Review
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
              <div className="w-1/8 text-center opacity-25">
                <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                <p className="text-grey-darker text-sm">payment</p>
              </div>
              <div className="w-1/8">
                <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
              </div>
              <div className="w-1/8 text-center">
                <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                <p className="text-grey-darker text-sm">Review</p>
              </div>
            </div>
              <div className="flex mt-8">
                <div className="w-4/5 mx-auto pl-8">
                <form className="flex flex-wrap mt-4">
                  <div className="border-b-2 border-purple-darkest pb-3 w-45/100">
                    <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="fname">my name is</label>
                    <p className="block mt-2 capitalize text-grey-darker font-semibold pl-4 cursor-pointer" type="text" name="fname" onClick={() => this.props.linkTo('3')}>{donor.fname} {donor.lname}</p>
                  </div>

                  <div className="w-1/10"></div>

                  <div className="border-b-2 border-purple-darkest pb-3 w-45/100">
                    <label className="uppercase text-xs text-grey-darker block pl-4">I'm donating</label>
                    <p className="block mt-2 text-grey-darker font-semibold pl-4 cursor-pointer" onClick={() => this.props.linkTo('1')}>{formatPrice(donation.amount)} as a {donation.frequency} gift</p>
                  </div>

                  <div className="pb-3 mt-6 w-full">
                    <label className="uppercase text-xs text-grey-darker block pl-4">To</label>
                    <p className="block mt-2 text-grey-darker font-semibold pl-4" >BC SPCA's Coats for Canines campaign</p>
                  </div>

                  <div className="border-b-2 border-purple-darkest pb-3 mt-6 w-full">
                    <label className="uppercase text-xs text-grey-darker block pl-4">Receipt using</label>
                    <p className="block mt-2 text-grey-darker font-semibold pl-4 cursor-pointer" onClick={() => this.props.linkTo('3')}>{donor.street}, {donor.city}, {donor.province}, <span className="uppercase">{donor.postal}</span></p>
                  </div>


                  <div className="border-b-2 border-purple-darkest pb-3 mt-6 w-45/100">
                    <label className="uppercase text-xs text-grey-darker block pl-4">Paying with</label>
                    <p className="block mt-2 text-grey-darker pl-4 text-sm cursor-pointer" onClick={() => this.props.linkTo('4')}>card ending with <span className="font-semibold">{shortenCreditCard(payment.card.value)}</span></p>
                  </div>
                  <div className="w-1/10"></div>
                  <div className="border-b-2 border-purple-darkest pb-3 mt-6 w-45/100">
                    <label className="uppercase text-xs text-grey-darker block pl-4">I can be reached at</label>
                    <p className="block mt-2 text-grey-darker font-semibold pl-4 cursor-pointer" onClick={() => this.props.linkTo('3')}>{donor.email}</p>
                  </div>

                </form>
                </div>
              </div>
              <div className="flex mt-8 w-full pr-8 pr-8 ml-8 pl-8 float-right">
                <div className="w-1/2"></div>
                <div className="w-1/2 ml-8">
                  <div className="float-right">
                    <button className="rounded-full bg-purple-darkest text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-5" onClick={() => this.props.submitForm()}>Donate</button>
                  </div>

                </div>
              </div>
          </div>
          <div className="w-1/3">
            <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
          </div>
        </div>
      </div>
    );
  }
}
export default Step5;
