import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ButtonBlock from './ButtonBlock';

import MyInput from './MyInput';
import Formsy from 'formsy-react';


class PersonalInfoForm extends React.Component {

  constructor(props) {
    super(props);

  //  this.validator = new SimpleReactValidator();

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
        canSubmit: false,
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
    canSubmit: '',
  }

  invalid = (element) => {
    return element === false;
  }

  handleInputChange = (event) => {
    this.setState({
      ...event
    })
  }

  updateProvince = (event) => {
    this.setState({
      province: event.value
    });
  }

  submitForm = (newLocation) => {
    if(this.state.canSubmit) {
      this.props.updatePersonalInformation(this.state, newLocation);
    }
  }

  disableButton = () => {
    this.setState({ canSubmit: false });
  }

  enableButton = () => {
    this.setState({ canSubmit: true });
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
      <Formsy onChange={this.handleInputChange} onValidSubmit={this.submitForm} onValid={this.enableButton} onInvalid={this.disableButton} className="flex flex-wrap mt-4 w-4/5 mx-auto pl-8">

          <MyInput
           name="fname"
           className="block mt-2 capitalize text-grey-darker font-semibold pl-4 outline-none"
           validations="isAlpha"
           validationError="Cannot be empty"
           required
           wrapperDivClassName="border-b border-grey pb-3 w-45/100"
           label="first name"
           value={this.state.fname}
           errorEmpty={true}
           placeholder={'Bilbo'}
          />

          <div className="w-1/10"></div>
          <MyInput
           name="lname"
           className="block mt-2 capitalize text-grey-darker font-semibold pl-4 outline-none"
           validations="isAlpha"
           validationError="Cannot be empty"
           required
           wrapperDivClassName="border-b border-grey pb-3 w-45/100"
           label="last name"
           value={this.state.lname}
           errorEmpty={true}
           placeholder={'Baggins'}

          />
          <MyInput
           name="email"
           className="block w-full mt-2 text-grey-darker font-semibold pl-4 outline-none"
           validations="isEmail"
           validationError="this is not a valid email"
           required
           wrapperDivClassName="border-b border-grey pb-3 mt-6 w-full"
           label="email"
           value={this.state.email}
           errorEmpty={true}
           placeholder={'bilbo.baggins@theonering.org'}

          />

          <MyInput
           name="street"
           className="block mt-2 text-grey-darker font-semibold pl-4 outline-none w-full"
           required
           wrapperDivClassName="border-b border-grey pb-3 mt-6 w-7/10"
           label="street"
           value={this.state.street}
           errorEmpty={true}
           placeholder={"1 bagshot row"}
          />

          <div className="w-1/10"></div>

          <MyInput
           name="apt"
           className="block mt-2 text-grey-darker font-semibold pl-4 outline-none fname"
           validations="isNumeric"
           validationError="this is not a valid email"
           wrapperDivClassName="border-b border-grey pb-3 mt-6 w-1/5"
           label="apt"
           value={this.state.apt}
           placeholder={"123"}
          />

          <MyInput
           name="city"
           className="block mt-2 text-grey-darker font-semibold pl-4 outline-none fname"
           validations="isAlpha"
           validationError="this is not a valid email"
           required
           wrapperDivClassName="border-b border-grey pb-3 mt-6 w-266"
           label="city"
           value={this.state.city}
           errorEmpty={true}
           placeholder={"Hobbiton"}
          />
          <div className="w-1/10"></div>

        <div className="border-b border-grey mt-6 w-266">
          <label className="uppercase text-xs text-grey-darker block pl-4" htmlFor="province">Province</label>
          <Select className="block mt-2 text-grey-darker font-semibold pl-4 w-24 capitalize outline-none province" options={provinces} clearable={false} searchable={false} placeholder="select an option" value={this.state.province} onChange={this.updateProvince} name="province"/>
        </div>

        <div className="w-1/10"></div>

         <MyInput
           name="postal"
           className="block mt-2 text-grey-darker font-semibold pl-4 outline-none fname"
           validations="isAlphanumeric,isLength:6"
           validationError="this is not a valid email"
           wrapperDivClassName="border-b border-grey pb-3 mt-6 w-266"
           required
           label="postal code"
           value={this.state.postal}
           errorEmpty={true}
           placeholder={"V5A0B9"}

         />
     </Formsy>
     <ButtonBlock
         inReview={this.props.inReview}
          goBack={this.props.goBack}
          hasBack={true}
          handleClick={this.submitForm}
          formValid={this.state.canSubmit}
        />
      </div>


   );
  }
}

export default PersonalInfoForm;
