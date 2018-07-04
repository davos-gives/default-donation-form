import React from 'react';

class SignInButton extends React.Component {

  render() {
    if(this.props.isValid) {
      return (
        <div className="float-right">
          <p className="text-purple text-xs text-center mr-8 cursor-pointer" onClick={() => this.props.skipLogin()}>Skip for now</p>
          <button className="rounded-full bg-orange text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-2" onClick={() => this.props.signIn()}>Sign in with Davos</button>
        </div>
      )
    } else {
      return (
        <div className="float-right">
          <p className="text-purple text-xs text-center mr-8 cursor-pointer" onClick={() => this.props.skipLogin()}>Skip for now</p>
          <button className="rounded-full bg-orange text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-2 opacity-50 cursor-not-allowed">Sign in with Davos</button>
        </div>
      )
    }
  }
}
export default SignInButton;
