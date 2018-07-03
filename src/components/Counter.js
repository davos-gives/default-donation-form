import React from 'react';

class Counter extends React.Component {

  render() {
    if(this.props.thanks) {
      return (
        <div className="justify-center flex flex-wrap ml-8">
          <div className="bg-orange-light rounded-lg float-right py-8 px-6 w-full">
            <p className="text-purple-darkest px-8 py-6 text-lg">
              <span className="text-4xl font-bold text-white">$837.95</span><br />
              of <span className="text-3xl">$40,000.00</span>
            </p>
            <div className="w-4/5 bg-white h-2 rounded-lg mx-8 mb-4">
              <div className="w-16 bg-purple-darkest h-2 rounded-lg"></div>
            </div>
            <p className="font-bold text-white px-8 pb-8">
              Raised by 212 people
            </p>
          </div>
          <button className="rounded-full bg-purple-darkest text-white text-xl py-4 px-8 font-bold -mt-8 outline-none">Thanks!</button>
        </div>

      )
    } else {
      return (
        <div className="justify-center flex flex-wrap ml-8">
          <div className="bg-orange-light rounded-lg float-right py-8 px-6 w-full">
            <p className="text-purple-darkest px-8 py-6 text-lg">
              <span className="text-4xl font-bold text-white">$837.95</span><br />
              of <span className="text-3xl">$40,000.00</span>
            </p>
            <div className="w-4/5 bg-white h-2 rounded-lg mx-8 mb-4">
              <div className="w-16 bg-purple-darkest h-2 rounded-lg"></div>
            </div>
            <p className="font-bold text-white px-8 pb-8">
              Raised by 212 people
            </p>
          </div>
          <button className="rounded-full bg-purple-darkest text-white text-xl py-4 px-8 font-bold -mt-8">Donate Now</button>
        </div>

      )
    }

  }

}

export default Counter;
