import { combineEpics } from 'redux-observable';

import dashboardEpics from './components/Dashboard.epics';

const rootEpics = combineEpics(
  ...dashboardEpics,
);

export default rootEpics;
