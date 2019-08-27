import { createSelector } from 'reselect';

const getDashboardStates = states => states.dashboard;

const getPictures = createSelector(
  getDashboardStates,
  states => states.pictures,
);

const getIsFetching = createSelector(
  getDashboardStates,
  states => states.isFetching,
);

const getErrorCode = createSelector(
  getDashboardStates,
  states => states.errorCode,
);

export {
  getPictures,
  getIsFetching,
  getErrorCode,
};
