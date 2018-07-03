import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ButtonBlock from './ButtonBlock';

import SimpleReactValidator from 'simple-react-validator';


class PersonalInfoForm extends React.Component {

  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    let personalInfo = JSON.parse(localStorage.getItem('donor'));

    if(personalInfo) {
      this.state = {
        province: personalInfo.province,
        fname: personalInfo.fname,
        lname: personalInfo.lname,
        email: personalInfo.email,
        street: personalInfo.street,
        apt: personalInfo.apt,
        city: personalInfo.city,
        postal: personalInfo.postal,
      }
    } else {
      this.state = {
        province: 'AB',
        fname: '',
        lname: '',
        email: '',
        street: '',
        apt: '',
        city: '',
        postal: '',
        provinceValid: true,
        fnameValid: true,
        lnameValid: true,
        emailValid: true,
        streetValid: true,
        aptValid: true,
        cityValid: true,
        postalValid: true,
      }
    }
  }

  state = {
    province: '',
    fname: '',
    lname: '',
    email: '',
    street: '',
    apt: '',
    city: '',
    postal: '',
    provinceValid: '',
    fnameValid: '',
    lnameValid: '',
    emailValid: '',
    streetValid: '',
    aptValid: '',
    cityValid: '',
    postalValid: '',
  }

  handleInputChange = (event) => {
    if(this.validator.fieldValid(`${event.currentTarget.name}`)) {
      this.setState({
        [`${event.currentTarget.name}Valid`]: true,
      })
    } else {
      this.setState({
        [`${event.currentTarget.name}Valid`]: false,
      })
    }

    this.forceUpdate();

    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  updateProvince = (event) => {
    this.setState({
      province: event.value
    });
  }

  submitForm = (newLocation) => {
    this.props.updatePersonalInformation(this.state, newLocation);
  }

  render() {

    const provinces = [
      {value: 'AB', label: 'AB'},
      {value: 'BC', label: 'BC'},
      {value: 'MB', label: 'MB'},
      {value: 'NB', label: 'NB'},
      {value: 'NL', label: 'NL'},
      {value: 'NS', label: 'NS'},
      {value: 'NT', label: 'NT'},
      {value: 'NU', label: 'NU'},
      {value: 'ON', label: 'ON'},
      {value: 'QC', label: 'QC'},
      {value: 'SK', label: 'SK'},
      {value: 'YT', label: 'YT'},
      {value: 'PE', label: 'PE'},
    ]

    return (
      <div>
        <form className="flex flex-wrap mt-4 w-4/5 mx-auto pl-8">

          <div className={(this.state.fnameValid ? "border-b border-grey pb-3 w-45/100" : "border-b border-grey pb-3 w-45/100 invalid")}>
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="fname">first name</label>
            <input className="block mt-2 capitalize text-grey-darker font-semibold pl-4 outline-none fname" type="text" required name="fname" placeholder="first name" value={this.state.fname} onChange={this.handleInputChange}/>
            {this.validator.message('fname', this.state.fname, 'alpha|min:1')}
          </div>

          <div className="w-1/10"></div>

          <div className={(this.state.lnameValid ? "border-b border-grey pb-3 w-45/100" : "border-b border-grey pb-3 w-45/100 invalid")}>
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="lname">last name</label>
            <input className="block mt-2 capitalize text-grey-darker font-semibold pl-4 outline-none " type="text" name="lname" placeholder="last name" value={this.state.lname} onChange={this.handleInputChange}/>
            {this.validator.message('lname', this.state.lname, 'required|alpha')}
          </div>

          <div className={(this.state.emailValid ? "border-b border-grey pb-3 mt-6 w-full" : "border-b border-grey pb-3 mt-6 w-full invalid")}>
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="email">Email</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 outline-none" type="email" name="email" placeholder="email@address.org" value={this.state.email} onChange={this.handleInputChange}/>
            {this.validator.message('email', this.state.email, 'required|email')}
          </div>

          <div className={(this.state.streetValid ? "border-b border-grey pb-3 mt-6 w-7/10" : "border-b border-grey pb-3 mt-6 w-7/10 invalid")}>
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="street">Street</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 outline-none" type="text" name="street" placeholder="685 Great Northern Way" value={this.state.street} onChange={this.handleInputChange}></input>
            {this.validator.message('street', this.state.street, 'required')}

          </div>

          <div className="w-1/10"></div>

          <div className={(this.state.aptValid ? "border-b border-grey pb-3 mt-6 w-1/5" : "border-b border-grey pb-3 mt-6 w-1/5 invalid")}>
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="street">Apt#</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 w-12 outline-none" type="apt" name="apt" placeholder="101" value={this.state.apt} onChange={this.handleInputChange}/>
            {this.validator.message('apt', this.state.apt, 'required|integer')}

          </div>

          <div className={(this.state.cityValid ? "border-b border-grey pb-3 mt-6 w-266" : "border-b border-grey pb-3 mt-6 w-266 invalid" )}>
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="city">City</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 w-32 outline-none" type="text" name="city" placeholder="Vancouver" value={this.state.city} onChange={this.handleInputChange}/>
            {this.validator.message('city', this.state.city, 'required|alpha')}

          </div>

          <div className="w-1/10"></div>

          <div className="border-b border-grey mt-6 w-266">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="province">Province</label>
            <Select className="block mt-2 text-grey-darker font-semibold pl-4 w-24 capitalize outline-none province" options={provinces} clearable={false} searchable={false} placeholder="select an option" value={this.state.province} onChange={this.updateProvince} name="province"/>
          </div>

          <div className="w-1/10"></div>

          <div className={(this.state.cityValid ? "border-b border-grey pb-3 mt-6 w-266" : "border-b border-grey pb-3 mt-6 w-266 invalid" )}>
            <label className="uppercase text-xs text-grey-darker block pl-4 " htmlFor="postal">Postal Code</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 outline-none" type="text" name="postal" placeholder="V3J4L5" value={this.state.postal} onChange={this.handleInputChange} />
            {this.validator.message('postal', this.state.postal, 'required|alpha_num|min:5|max:5')}
          </div>
        </form>

          <ButtonBlock
            inReview={this.props.inReview}
            goBack={this.props.goBack}
            hasBack={true}
            handleClick={this.submitForm}
          />
      </div>
    )
  }
}

export default PersonalInfoForm;
