import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';
import App from './App';

jest.mock('./utils/createStore', () => () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
}));

describe('<App />', () => {
  it('should contain Provider and Dashboard Component', () => {
    const component = shallow(<App />);

    expect(component.find(Provider)).toHaveLength(1);
    expect(component.find(Dashboard)).toHaveLength(1);
  });
});
