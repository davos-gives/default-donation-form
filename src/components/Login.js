import React from 'react';
import SignInButton from './SignInButton';

class Login extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
    this.props.updateFormValidity();
  }

  render() {
    return (
      <div>
      <div>
        <div className="flex mt-4">
          <div className="w-3/5 mx-auto pl-8">
            <div className={this.props.formValidity ? "bg-white rounded-lg pt-3 pb-3 shadow-md pl-6" : "bg-white rounded-lg pt-3 pb-3 shadow-md pl-6 invalid-login"}>
              <label className="uppercase text-xs font-bold text-purple block" for="username">user name</label>
              <input className="block mt-4 outline-none w-full" type="text" name="username" placeholder="Username@email.com" onChange={this.handleInputChange} value={this.state.username}></input>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-3/5 mx-auto pl-8">
            <div className={this.props.formValidity ? "bg-white rounded-lg pt-3 pb-3 shadow-md pl-6" : "bg-white rounded-lg pt-3 pb-3 shadow-md pl-6 invalid-login"}>
              <label className="uppercase text-xs font-bold text-purple block" for="password">password</label>
              <input className="block mt-4 outline-none" type="password" name="password" placeholder="*************" onChange={this.handleInputChange} value={this.state.password}></input>
            </div>
            <p className="ml-6 text-xs mt-4 text-grey-dark">Forgot password?</p>
          </div>
        </div>
      </div>

      <div className="flex mt-8 w-full float-right pl-6 ml-8">
        <div className="w-1/2 ml-8">
          <button className="rounded-full border border-purple-darkest border-solid py-4 px-8 rounded-full mr-8 font-bold mt-5 text-grey-darker mx-auto" onClick={() => this.props.goBack()}>Back</button>
        </div>
        <div className="w-1/2">
          <SignInButton isValid={this.props.formValidity} authenticate={this.props.authenticate} skipLogin={this.props.skipLogin} username={this.state.username} password={this.state.password} signIn={() => this.props.authenticate(this.state)}/>
        </div>
      </div>
    </div>
    )
  }

}

export default Login;
