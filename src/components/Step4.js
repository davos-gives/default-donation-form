import React from 'react';

class Step4 extends React.Component {

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5 mt-8 pt-8">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
          <div className="w-2/3 p-6">
            <h1 className="text-grey-darker text-3xl flex align-middle">
              <span className="bg-grey-darker text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">3</span>
              Payment
            </h1>
            <div className="flex mt-8 mr-8">
              <div className="w-1/8">
              </div>
              <div className="w-1/8 text-center opacity-25">
                <span className="bg-purple rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                <p className="font-bold text-grey-darker text-sm">Gift Options</p>
              </div>
              <div className="w-1/8">
                <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
              </div>
              <div className="w-1/8 text-center opacity-25">
                <span className="bg-purple rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                <p className="text-grey-darker text-sm">Personal Info</p>
              </div>
              <div className="w-1/8">
                <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
              </div>
              <div className="w-1/8 text-center">
                <span className="bg-purple rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                <p className="text-grey-darker text-sm">payment</p>
              </div>
              <div className="w-1/8">
                <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
              </div>
              <div className="w-1/8 text-center opacity-25">
                <span className="bg-purple rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                <p className="text-grey-darker text-sm">Review</p>
              </div>
            </div>
              <div className="flex mt-8">
                <div className="w-4/5 mx-auto pl-8">
                <form className="flex flex-wrap mt-4">
                  <div className="border-b border-grey pb-3 w-full">
                    <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="fname">Card number</label>
                    <input className="block mt-2 capitalize text-grey-darker font-semibold pl-4" type="text" name="fname" placeholder="**** **** **** 1234"></input>
                  </div>

                  <div className="border-b border-grey pb-3 mt-6 w-1/5">
                    <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="lname">expires</label>
                    <input className="block mt-2 capitalize text-grey-darker font-semibold pl-4" type="text" name="lname" placeholder="MM/YY"></input>
                  </div>

                  <div className="w-1/10"></div>

                  <div className="border-b border-grey pb-3 mt-6 w-1/5">
                    <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="email">CVV</label>
                    <input className="block mt-2 text-grey-darker font-semibold pl-4" type="email" name="email" placeholder="123"></input>
                  </div>
                </form>

                <p className="text-xs text-grey-darker block mt-8 mb-8">We also support the following payments</p>

                <div className="flex">
                  <div className="w-1/2 text-center">
                    <img className="w-24" src="/ApplePay.png" />
                  </div>
                  <div className="w-1/2 text-center">
                      <img className="w-24 mt-4" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" alt="PayPal Logo" />
                  </div>
                </div>
                </div>
              </div>

              <div className="flex mt-8 w-full pr-8 pr-8 ml-8 pl-8 float-right">
                <div className="w-1/2 ml-8 pl-8">
                  <button className="rounded-full border border-purple border-solid py-4 px-8 rounded-full mr-8 font-bold mt-5 text-grey-darker mx-auto">Back</button>
                </div>
                <div className="w-1/2 ml-8">
                  <div className="float-right">
                    <button className="rounded-full bg-purple text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-5">Next</button>
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

export default Step4;
