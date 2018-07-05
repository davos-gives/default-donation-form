import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import StoredAddress from './StoredAddress';
import ButtonBlock from './ButtonBlock';


class Step3 extends React.Component {

  render() {

    if(this.props.loggedIn) {
      return (
        <div className="mx-auto font-sans container w-3/5 -mt-32">
          <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
            <div className="w-2/3 p-6 mr-8 mt-8 mx-8">
              <h1 className="text-purple-darkest text-3xl flex align-middle">
                <span className="bg-purple-darkest text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">2</span>
                Personal Info
              </h1>
              <div className="flex mt-8 mr-8">
                <div className="w-1/8">
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="font-bold text-grey-darker text-sm">Gift Options</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Personal Info</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">payment</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Review</p>
                </div>
              </div>
                <div className="flex mt-2">
                  <div className="w-4/5 mx-auto">
                  <div className="">

                    <StoredAddress address={this.props.addresses['home']} selected={this.props.homeActive} selectHome={this.props.selectHome}/>
                    <StoredAddress address={this.props.addresses['school']} selected={this.props.schoolActive} selectSchool={this.props.selectSchool}/>

                    <div className="mt-4 bg-white w-full shadow-md flex rounded-lg text-grey-darker w-29 pt-4 pb-4 text-lg text-center border-b-4 flex">
                      <div className="w-full flex justify-center">
                        <img src="/plus.png" className=""/>
                        <p className="mx-8 align-left mr-8 pr-8">Add new address</p>
                      </div>
                    </div>
                  </div>
                  <ButtonBlock
                    handleClick={this.props.updateSavedAddress}
                    inReview={this.props.inReview}
                    formValid={true}
                  />
                  </div>
                </div>
            </div>
            <div className="w-1/3">
              <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="mx-auto font-sans container w-3/5 -mt-32">
          <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
            <div className="w-2/3 p-6 mr-8 mt-8 mx-8">
              <h1 className="text-purple-darkest text-3xl flex align-middle">
                <span className="bg-purple-darkest text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">2</span>
                Personal Info
              </h1>
              <div className="flex mt-8 mr-8">
                <div className="w-1/8">
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="font-bold text-grey-darker text-sm">Gift Options</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Personal Info</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">payment</p>
                </div>
                <div className="w-1/8">
                  <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
                </div>
                <div className="w-1/8 text-center opacity-25">
                  <span className="bg-purple-darkest rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                  <p className="text-grey-darker text-sm">Review</p>
                </div>
              </div>
                <div className="flex mt-8">
                    <PersonalInfoForm
                      updatePersonalInformation={this.props.updatePersonalInformation}
                      goBack={this.props.goBack}
                      inReview={this.props.inReview}
                    />
                </div>
            </div>
            <div className="w-1/3">
              <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
            </div>
          </div>
        </div>
      )

    }
  }
}

export default Step3;
