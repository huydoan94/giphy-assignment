import dashboardReducer from './Dashboard.reducers';
import { actions } from './Dashboard.actions';

const { dashboard: reducer } = dashboardReducer;

describe('Dashboard reducers', () => {
  let initialStates;

  beforeEach(() => {
    initialStates = {
      pictures: [],
      isFetching: false,
      errorCode: undefined,
    };
  });

  it('action FETCH_GIPHY.START should clear error code and set isFetching to true', () => {
    const result = reducer(
      { ...initialStates, errorCode: 'some-error' },
      actions.fetchGiphy.start(20, 20, true),
    );

    expect(result.errorCode).toBeNull();
    expect(result.isFetching).toBeTruthy();
  });

  it('action FETCH_GIPHY.SUCCESS should save pictures', () => {
    const result = reducer(
      { ...initialStates, pictures: [] },
      actions.fetchGiphy.success(['some-pic']),
    );

    expect(result.errorCode).toBeNull();
    expect(result.isFetching).toBeFalsy();
    expect(result.pictures).toEqual(['some-pic']);
  });

  it('FETCH_GIPHY.ERROR should clear isFetching and set error', () => {
    const payload = 'some-error';
    const result = reducer(
      { ...initialStates, isFetching: true },
      actions.fetchGiphy.error(payload),
    );

    expect(result.isFetching).toBeFalsy();
    expect(result.errorCode).toBe(payload);
  });

  it('CLEAR_ERROR_CODE should clear error', () => {
    const result = reducer(
      { ...initialStates, errorCode: 'some-error' },
      actions.clearErrorCode(),
    );

    expect(result.errorCode).toBeNull();
  });
});
