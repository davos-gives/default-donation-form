import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5">
        <div className="bg-white pt-4 flex self-center">
          <div className="w-1/2">
            <img src="/logo.png" className="w-32 mt-6" />
          </div>
          <div className="w-1/2 line-200">
            <p className="float-right text-grey-darker align-bottom"> <img className="w-4 mr-3 rotate-90" src="/ChevronDown.svg" /> Go Back</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Header;
