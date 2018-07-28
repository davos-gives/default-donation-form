import React from 'react';
import Counter from './Counter';
class Info extends React.Component {

  render() {
    return (
      <div className="bg-orange pb-8 h-84">
        <div className="mx-auto font-sans container w-3/5 mt-8 pt-8 forced-height">
          <div className="mt-4 py-4 flex self-center">
            <div className="w-2/3 pr-8">
              <h1 className="text-white mb-8 pr-8">Help us find a new home!</h1>
              <p className="text-white text-lg leading-normal pr-8">After 18 years in the same location, the Barks & Meows Shelter is facing a move. In addition to finding a suitable location that will permit us to continue our work, major renovations and modifications may well be required. You can assist us in our quest to raise funds by giving to our campaign.</p>
              <p className="text-white text-lg mt-6 leading-normal pr-8">Help our shelter reach our goal; our survival is in your hands. Now more than ever we need your involvement so that our quest of helping abandoned animals can continue</p>
            </div>
            <div className="w-1/3">
              <Counter thanks={this.props.thanks}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Info;
