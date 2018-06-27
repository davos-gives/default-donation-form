import React from 'react';

class ThankYou extends React.Component {

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5 mt-8 pt-8">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
          <div className="w-2/3 p-6 mr-8 mt-8">
            <span className="bg-purple text-white rounded-full h-32 w-32 flex items-center justify-center mx-auto text-5xl mb-8 mt-8">&#x2713;</span>

            <h1 className="text-grey-darker text-center">Thank you for your donation!</h1>
            <p className="text-grey-darker text-center text-lg font-thin mt-4">Check your email for your receipt</p>
            <div className="mx-auto w-24">
              <button className="rounded-full border border-purple border-solid py-4 px-8 rounded-full mr-8 font-bold mt-5 text-grey-darker mx-auto mb-8 mt-8">Receipt</button>
              <button className="rounded-full border border-purple border-solid py-4 px-8 rounded-full mr-8 font-bold text-grey-darker mx-auto">Manage</button>
            </div>
          </div>
          <div className="w-1/3">
            <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ThankYou;
