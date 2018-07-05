import React from 'react';
import Counter from './Counter';
import { formatPrice, shortenCreditCard, shortenYear } from '../helpers.js';

class StoredCard extends React.Component {

  render() {
    if(this.props.card.type === "visa") {
      return (
        <div className={this.props.selected ? "mx-8 mt-8 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-6 pb-5 text-lg text-center border-b-4 flex border-orange cursor-pointer" : "mx-8 mt-8 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-6 pb-5 text-lg text-center border-b-4 flex cursor-pointer" } onClick={this.props.selectVisa}>
          <img src={"/" + this.props.card.type + ".png"} className="w-1/10"/>
          <p className="mx-8 align-left text-sm mt-2 mr-8 pr-8 w-1/2">{this.props.card.type} ending in {shortenCreditCard(this.props.card.number)}</p>
          <p className="mx-8 align-middle text-sm mt-2 mr-8 pr-8 w-1/3">Expires {this.props.card.expiryMonth}/{shortenYear(this.props.card.expiryYear)}</p>
          <div className="w-1/10">
            <img src="/ChevronDownGrey.svg" className="w-4 h-8"/>
          </div>
        </div>
      )
    } else {
      return (
        <div className={this.props.selected ? "mx-8 mt-8 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-6 pb-5 text-lg text-center border-b-4 flex border-orange cursor-pointer" : "mx-8 mt-8 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-6 pb-5 text-lg text-center border-b-4 flex cursor-pointer" } onClick={this.props.selectMastercard}>
          <img src={"/" + this.props.card.type + ".png"} className="w-1/10"/>
          <p className="mx-8 align-left text-sm mt-2 mr-8 pr-8 w-1/2">{this.props.card.type} ending in {shortenCreditCard(this.props.card.number)}</p>
          <p className="mx-8 align-middle text-sm mt-2 mr-8 pr-8 w-1/3">Expires {this.props.card.expiryMonth}/{shortenYear(this.props.card.expiryYear)}</p>
          <div className="w-1/10">
            <img src="/ChevronDownGrey.svg" className="w-4 h-8"/>
          </div>
        </div>
      )

    }

  }

}

export default StoredCard;
