import { combineReducers } from 'redux';

import dashboardReducers from './components/Dashboard.reducers';

const rootReducer = combineReducers({
  ...dashboardReducers,
});

export default rootReducer;
