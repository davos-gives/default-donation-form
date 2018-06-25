import React from 'react';

class Step2 extends React.Component {

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5 mt-8 pt-8">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
          <div className="w-2/3 p-6">
            <h1 className="text-grey-darker text-3xl flex align-middle">
              <span className="bg-grey-darker text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">1</span>
              Gift Options
            </h1>
            <div className="flex mt-8 mr-8">
              <div className="w-1/8">
              </div>
              <div className="w-1/8 text-center">
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
              <div className="w-1/8 text-center opacity-25">
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
                <div className="w-3/5 mx-auto pl-8">
                  <div className="bg-purple text-white rounded-lg pt-6 text-center pb-4 flex overflow-hidden relative">
                    <span className="inline-block flex-1 pt-3">You are donating</span>
                    <div className="flex-1 mb-4">
                      <span className="text-4xl font-semibold block">$10</span>
                      <span className="text-xs -mt-6">Monthly</span>
                      <img src="/Davos_icon.svg" className="background-logo" />
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="w-3/5 mx-auto pl-8">
                  <div className="bg-white rounded-lg pt-3 pb-3 shadow-md pl-6">
                    <label className="uppercase text-xs font-bold text-purple block" for="username">user name</label>
                    <input className="block mt-4" type="text" name="username" placeholder="Username@email.com"></input>
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="w-3/5 mx-auto pl-8">
                  <div className="bg-white rounded-lg pt-3 pb-3 shadow-md pl-6">
                    <label className="uppercase text-xs font-bold text-purple block" for="password">password</label>
                    <input className="block mt-4" type="password" name="username" placeholder="*************"></input>
                  </div>
                  <p className="ml-6 text-xs mt-4 text-grey-dark">Forgot password?</p>
                </div>
              </div>

              <div className="flex mt-8 w-4/5 float-right pl-6">
                <div className="w-1/2">
                  <button className="rounded-full border border-purple border-solid py-4 px-8 rounded-full mr-8 font-bold mt-5 text-grey-darker mx-auto">Back</button>
                </div>
                <div className="w-1/2">
                  <div className="float-right">
                    <p className="text-purple text-xs text-center mr-8">Skip for now</p>
                    <button className="rounded-full bg-purple text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-2">Sign in with Davos</button>
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

export default Step2;
