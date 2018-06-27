import React from 'react';

class PaymentForm extends React.Component {

  constructor(props) {
    super(props);

    let paymentInfo = JSON.parse(localStorage.getItem('payment'));

    if(paymentInfo) {
      this.state = {
        number: paymentInfo.number,
        expiryMonth: paymentInfo.expiryMonth,
        expiryYear: paymentInfo.expiryYear,
        CVV: paymentInfo.CVV,
      }

    } else {
    this.state = {
      number: '',
      expiryMonth: '',
      expiryYear: '',
      CVV: ''
    }
  }
}

  state = {
    number: '',
    expiryMonth: '',
    expiryYear: '',
    CVV: ''
  }

  handleClick = () => {
    this.props.addInfoToDonation(this.state);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  submitForm = () => {
    this.props.updatePaymentInformation(this.state);
  }

  render() {
    return (
      <div>
      <div className="flex mt-8">
        <div className="w-4/5 mx-auto pl-8">
        <form className="flex flex-wrap mt-4">
          <div className="border-b border-grey pb-3 w-full">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="fname">Card number</label>
            <input className="block mt-2 capitalize text-grey-darker font-semibold pl-4" type="text" name="number" placeholder="**** **** **** 1234" onChange={this.handleInputChange} value={this.state.number}></input>
          </div>

          <div className="border-b border-grey pb-3 mt-6 w-1/4">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="lname">expires</label>
            <input className="inline-block mt-2 capitalize text-grey-darker font-semibold pl-4 w-12" type="text" name="expiryMonth" placeholder="MM" onChange={this.handleInputChange} value={this.state.expiryMonth}/> <span className="text-grey-darker"> / </span>
            <input className="inline-block mt-2 capitalize text-grey-darker font-semibold pl-4 w-12" type="text" name="expiryYear" placeholder="YY" onChange={this.handleInputChange} value={this.state.expiryYear} />
          </div>

          <div className="w-1/10"></div>

          <div className="border-b border-grey pb-3 mt-6 w-1/5">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="email">CVV</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 w-24" type="email" name="CVV" placeholder="123" onChange={this.handleInputChange} value={this.state.CVV}></input>
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
          <button className="rounded-full border border-purple border-solid py-4 px-8 rounded-full mr-8 font-bold mt-5 text-grey-darker mx-auto" onClick={this.props.goBack}>Back</button>
        </div>
        <div className="w-1/2 ml-8">
          <div className="float-right">
            <button className="rounded-full bg-purple text-white font-thin py-4 px-8 rounded-full mr-6 font-bold mt-5" onClick={this.submitForm}>Next</button>
          </div>

        </div>
      </div>
    </div>
    )
  }
}

export default PaymentForm;
