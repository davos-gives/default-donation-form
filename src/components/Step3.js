import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';

class Step3 extends React.Component {

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5 mt-8 pt-8">
        <div className="bg-white mt-8 rounded-lg shadow-md flex self-center">
          <div className="w-2/3 p-6">
            <h1 className="text-grey-darker text-3xl flex align-middle">
              <span className="bg-grey-darker text-white rounded-full h-12 w-12 flex items-center justify-center mr-8 -mt-2">2</span>
              Personal Info
            </h1>
            <div className="flex mt-8 mr-8">
              <div className="w-1/8">
              </div>
              <div className="w-1/8 text-center opacity-25">
                <span className="bg-purple rounded-full mx-auto flex h-4 w-4 mb-2"></span>
                <p className="font-bold text-grey-darker text-sm">Gift Options</p>
              </div>
              <div className="w-1/8">
                <div className="w-4/5 mx-auto border-t border-grey-light border-solid mt-2"></div>
              </div>
              <div className="w-1/8 text-center">
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
                <div className="w-4/5 mx-auto pl-8">
                  <PersonalInfoForm
                    updatePersonalInformation={this.props.updatePersonalInformation}
                  />
                </div>
              </div>
          </div>
          <div className="w-1/3">
            <img src="/dogs.jpg" alt="dogs!" className="h-full rounded-r-lg side-image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Step3;
