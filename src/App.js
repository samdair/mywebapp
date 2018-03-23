import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Album from './components/Album';
import './App.css';

export default  class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <Album />
      </Provider>
    );
  }
}
  // render() {
  //   return (
  //     <div className="App">
        
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
