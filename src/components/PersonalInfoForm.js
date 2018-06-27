import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ButtonBlock from './ButtonBlock';

class PersonalInfoForm extends React.Component {

  constructor(props) {
    super(props);

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
  }

  handleInputChange = (event) => {
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
        <form className="flex flex-wrap mt-4">
          <div className="border-b border-grey pb-3 w-45/100">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="fname">first name</label>
            <input className="block mt-2 capitalize text-grey-darker font-semibold pl-4" type="text" name="fname" placeholder="first name" value={this.state.fname} onChange={this.handleInputChange} />
          </div>

          <div className="w-1/10"></div>

          <div className="border-b border-grey pb-3 w-45/100">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="lname">last name</label>
            <input className="block mt-2 capitalize text-grey-darker font-semibold pl-4" type="text" name="lname" placeholder="last name" value={this.state.lname} onChange={this.handleInputChange}/>
          </div>

          <div className="border-b border-grey pb-3 mt-6 w-full">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="email">Email</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4" type="email" name="email" placeholder="email@address.org" value={this.state.email} onChange={this.handleInputChange}/>
          </div>

          <div className="border-b border-grey pb-3 mt-6 w-7/10">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="street">Street</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4" type="text" name="street" placeholder="685 Great Northern Way" value={this.state.street} onChange={this.handleInputChange}></input>
          </div>

          <div className="w-1/10"></div>

          <div className="border-b border-grey pb-3 mt-6 w-1/5">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="street">Apt#</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 w-12" type="apt" name="street" placeholder="101" value={this.state.apt} onChange={this.handleInputChange}/>
          </div>

          <div className="border-b border-grey pb-3 mt-6 w-266">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="city">City</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4 w-32" type="text" name="city" placeholder="Vancouver" value={this.state.city} onChange={this.handleInputChange}/>
          </div>

          <div className="w-1/10"></div>

          <div className="border-b border-grey pb-3 mt-6 w-266">
            <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="province">Province</label>
            <Select className="block mt-2 text-grey-darker font-semibold pl-4 w-24 capitalize" options={provinces} clearable={false} searchable={false} placeholder="select an option" value={this.state.province} onChange={this.updateProvince} name="province"/>
          </div>

          <div className="w-1/10"></div>

          <div className="border-b border-grey pb-3 mt-6 w-266">
            <label className="uppercase text-xs text-grey-darker block pl-4 " htmlFor="postal">Postal Code</label>
            <input className="block mt-2 text-grey-darker font-semibold pl-4" type="text" name="postal" placeholder="V3J4L5" value={this.state.postal} onChange={this.handleInputChange} />
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
