import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';

import createStore from './utils/createStore';

import Dashboard from './components/Dashboard';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.store = createStore();
    axios.defaults.baseURL = 'https://api.giphy.com';
  }

  render() {
    return (
      <Provider store={this.store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
