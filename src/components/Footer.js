import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="mx-auto font-sans container w-3/5 mt-8">
        <div className="bg-white pt-4 flex self-center mb-8">
          <div className="w-1/2">
            <h3 className="text-grey-dark text-xl mb-6">Spread the word!</h3>
            <div className="flex mb-8">
              <div className="bg-orange text-white rounded-full h-12 w-12 flex items-center justify-center mr-8">
                <img src="/facebook.png" />
              </div>
              <div className="bg-orange text-white rounded-full h-12 w-12 flex items-center justify-center mr-8">
                <img src="/twitter.png" className="w-8"/>
              </div>
              <div className="bg-orange text-white rounded-full h-12 w-12 flex items-center justify-center mr-8">
                <img src="/email.png" className="w-8"/>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-end pb-6 justify-end">
            <p className="float-right text-grey-lighter inline-block">Powered by</p><img className=" inline-block -mt-2 pt-px ml-4" src="/davo-logo.png" />
          </div>
        </div>
        <div className="bg-white pt-4 flex self-center mt-8 border-t border-grey-lightest justify-between pt-8 mb-8">
          <div className="w-1/3 mt-8">
          <p className="text-lg text-grey-darkest leading-normal"><span className="font-bold">Barks & Meows Shelter</span> is a community of people committed to rescuing, rehabilitating, and recolating animals to loving homes. We're located in Port Moody, B.C.</p>
          </div>
          <div className="mt-8">
            <p className="text-lg text-grey-darkest leading-normal"><span className="font-bold">Contact Us</span><br />(778) 598 2346<br />info@bmshelter.org</p>
          </div>
          <div className="mr-8 mt-8">
          <p className="text-lg text-grey-darkest leading-normal"><span className="font-bold">Connect With Us</span><br /><img className="mt-2" src="/socialShare.png" /></p>
          </div>
        </div>
      </div>
    )
  }

}

export default Footer;
