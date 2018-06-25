import React from 'react';

class GiftOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 1000,
      frequency: 'Monthly',
    }
  }

  state = {
    amount: '',
    frequency: '',
  }

  handleClick = () => {
    console.log(this.state);
    this.props.addInfoToDonation(this.state);
  }

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
                <div className="w-1/2">
                  <div className="bg-purple text-white w-64 rounded-lg pt-8 text-center float-right pb-4">
                    <span className="text-5xl font-bold block pb-2">$10</span>
                    <span className="block border-t pt-2 border-white border-solid mx-8 text-xl font-bold pb-4">One-time gift</span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="bg-white text-grey-darker w-64 rounded-lg pt-8 text-center shadow-md mx-auto pb-4">
                    <span className="text-5xl font-bold block pb-2">$  &#32; &#32;</span>
                    <span className="block border-t pt-2 border-white border-solid mx-8 text-xl pb-4">Monthly gift</span>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 w-5/6 ml-8 pl-6">
                <div className="w-1/3">
                  <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 py-6 text-lg text-center">
                    $5
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 pt-6 pb-5 text-lg text-center border-b-4 font-bold border-purple">
                    $10
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 py-6 text-lg text-center">
                    $30
                  </div>
                </div>
                <div className="w-1/6">
                </div>
              </div>
              <div className="flex mt-8 w-5/6 ml-8 pl-6">
                <div className="w-1/3">
                  <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 py-6 text-lg text-center">
                    $50
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-8 py-6 text-lg text-center">
                    $100
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="bg-white shadow-md rounded-lg text-grey-darker w-29 px-2 py-6 text-lg text-center">
                    Custom
                  </div>
                </div>
                <div className="w-1/6">
                </div>
              </div>
              <button className="rounded-full bg-purple text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-8 float-right" onClick={this.handleClick}>Next</button>
          </div>
          <div className="w-1/3">
            <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
          </div>
        </div>
      </div>
    )
  }
}

export default GiftOptions;
