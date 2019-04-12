import React, { Component } from 'react';
import './assets/css/App.css';
import Demo1 from './components/Demo1'
import BizCharts from './components/BizCharts'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Demo1 />
        <BizCharts />


      </div>
    );
  }
}

export default App;
