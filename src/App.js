import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

class App extends Component {
  render() {
    let { params } = this.props.match;

    switch(params.stepId) {
      case '1':
        return (<Step1 />);
      case '2':
        return (<Step2 />);
      case '3':
        return (<Step3 />);
      case '4':
        return (<Step4 />);
      case '5':
        return (<Step5 />);
      default:
        return (<Step1 />);
    }
  }
}

export default App;
