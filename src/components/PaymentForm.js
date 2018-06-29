import React from 'react';
import ButtonBlock from './ButtonBlock';

class PaymentForm extends React.Component {

  constructor(props) {
    super(props);

    let paymentInfo = JSON.parse(localStorage.getItem('payment'));

    if(paymentInfo) {
      this.state = {
        number: paymentInfo.number,
        expiryMonth: paymentInfo.expiryMonth,
        expiryYear: paymentInfo.expiryYear,
        cvv: paymentInfo.cvv,
      }

    } else {
    this.state = {
      number: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: ''
    }
  }
}
  state = {
    number: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  submitForm = (newLocation) => {
    this.props.updatePaymentInformation(this.state, newLocation);
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
            <label className="uppercase text-xs text-grey-darker block pl-4">CVV</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 w-24" name="cvv" placeholder="123" onChange={this.handleInputChange} value={this.state.cvv}></input>
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

      <ButtonBlock
        hasBack={true}
        goBack={this.props.goBack}
        handleClick={this.submitForm}
        inReview={this.props.inReview}
      />
    </div>
    )
  }
}

export default PaymentForm;
