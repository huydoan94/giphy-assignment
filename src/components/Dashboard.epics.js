import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { actionTypes, actions } from './Dashboard.actions';
import { fetchGiphy } from './Dashboard.services';

// Epic is for stream event link sending and receiving data from server
const dashboardEpic = (action$, state$) => action$.pipe(
  ofType(actionTypes.FETCH_GIPHY.START),
  switchMap(({ offset, limit, isAppend }) => from(fetchGiphy(offset, limit)).pipe(
    map(({ data: { data: pictures } }) => {
      let result = pictures;
      if (isAppend) {
        result = [...state$.value.dashboard.pictures, ...pictures];
      }
      return actions.fetchGiphy.success(result);
    }),
    catchError(error => of(actions.fetchGiphy.error(error))),
  )),
);

export default [
  dashboardEpic,
];
