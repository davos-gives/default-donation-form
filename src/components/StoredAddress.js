import React from 'react';
import Counter from './Counter';
import { formatPrice, shortenCreditCard, shortenYear } from '../helpers.js';

class StoredAddress extends React.Component {

  render() {
    if(this.props.address.name === 'home') {
      if(this.props.selected) {
        return (
          <div className={this.props.selected ? "mt-4 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-4 pb-5 text-lg text-left border-b-4 border-orange cursor-pointer flex-wrap px-8" : "mt-8 bg-white w-full shadow-md rounded-lg text-grey-darker w-29 pt-2 pb-5 text-lg text-left border-b-4 flex cursor-pointer flex-wrap px-8 static"} onClick={this.props.selectHome}>
            <button class="rounded-full bg-orange text-white font-thing px-4 relative z-30 block -mt-8 right-button">Edit</button>
            <div className="w-full display-block">
              <h1 className="text-grey-darker text-xl w-full mb-2 capitalize">{this.props.address.name}</h1>
            </div>
            <div className="w-full display-block">
              <p className="align-left text-base mr-8 pr-8 w-full">{this.props.address.street}, {this.props.address.city}, {this.props.address.province}, {this.props.address.country}</p>
              <p className="align-left text-base mt-2 mr-8 pr-8 w-full">{this.props.address.postal}</p>
            </div>
          </div>
        )
      } else {
        return (
          <div className={this.props.selected ? "mt-4 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-4 pb-5 text-lg text-left border-b-4 border-orange cursor-pointer flex-wrap px-8" : "mt-8 bg-white w-full shadow-md rounded-lg text-grey-darker w-29 pt-2 pb-5 text-lg text-left border-b-4 flex cursor-pointer flex-wrap px-8 static" } onClick={this.props.selectHome}>
          <div className="w-full display-block">
              <h1 className="text-grey-darker text-xl w-full mb-2 capitalize">{this.props.address.name}</h1>
            </div>
            <div className="w-full display-block">
              <p className="align-left text-base mr-8 pr-8 w-full">{this.props.address.street}, {this.props.address.city}, {this.props.address.province}, {this.props.address.country}</p>
              <p className="align-left text-base mt-2 mr-8 pr-8 w-full">{this.props.address.postal}</p>
            </div>
          </div>
        )

      }

    } else {

      if(this.props.selected) {
        return (
          <div className={this.props.selected ? "mt-8 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-4 pb-5 text-lg text-left border-b-4 border-orange cursor-pointer flex-wrap px-8" : "mt-8 bg-white w-full shadow-md rounded-lg text-grey-darker w-29 pt-2 pb-5 text-lg text-left border-b-4 flex cursor-pointer flex-wrap px-8 static"} onClick={this.props.selectSchool}>
            <button class="rounded-full bg-orange text-white font-thing px-4 relative z-30 block -mt-8 right-button">Edit</button>
            <div className="w-full display-block">
              <h1 className="text-grey-darker text-xl w-full mb-2 capitalize">{this.props.address.name}</h1>
            </div>
            <div className="w-full display-block">
              <p className="align-left text-base mr-8 pr-8 w-full">{this.props.address.street}, {this.props.address.city}, {this.props.address.province}, {this.props.address.country}</p>
              <p className="align-left text-base mt-2 mr-8 pr-8 w-full">{this.props.address.postal}</p>
            </div>
          </div>
        )
      } else {
        return (
          <div className={this.props.selected ? "mt-8 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-4 pb-5 text-lg text-left border-b-4 border-orange cursor-pointer flex-wrap px-8" : "mt-8 bg-white w-full shadow-md rounded-lg text-grey-darker w-29 pt-2 pb-5 text-lg text-left border-b-4 flex cursor-pointer flex-wrap px-8 static" } onClick={this.props.selectSchool}>
          <div className="w-full display-block">
              <h1 className="text-grey-darker text-xl w-full mb-2 capitalize">{this.props.address.name}</h1>
            </div>
            <div className="w-full display-block">
              <p className="align-left text-base mr-8 pr-8 w-full">{this.props.address.street}, {this.props.address.city}, {this.props.address.province}, {this.props.address.country}</p>
              <p className="align-left text-base mt-2 mr-8 pr-8 w-full">{this.props.address.postal}</p>
            </div>
          </div>
        )

      }
    }
  }

}

export default StoredAddress;
