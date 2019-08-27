import { actions, actionTypes } from './Dashboard.actions';

const { FETCH_GIPHY, CLEAR_ERROR_CODE } = actionTypes;
const { fetchGiphy, clearErrorCode } = actions;

describe('Dashboard actions', () => {
  it('should contains fetchGiphy and clearErrorCode', () => {
    expect(fetchGiphy).not.toBeUndefined();
    expect(clearErrorCode).not.toBeUndefined();
  });

  it('should return clearErrorCode action object when called', () => {
    const expectedValue = { type: CLEAR_ERROR_CODE };

    expect(clearErrorCode()).toEqual(expectedValue);
  });

  describe('fetchGiphy', () => {
    it('should return start type when call with start sub action', () => {
      const offset = 20;
      const limit = 20;
      const isAppend = true;
      const expectedValue = {
        type: FETCH_GIPHY.START, offset, limit, isAppend,
      };

      expect(fetchGiphy.start(offset, limit, isAppend)).toEqual(expectedValue);
    });

    it('should return success type when call with success sub action', () => {
      const pictures = [];
      const expectedValue = { type: FETCH_GIPHY.SUCCESS, pictures };

      expect(fetchGiphy.success(pictures)).toEqual(expectedValue);
    });

    it('should return error type when call with error sub action', () => {
      const error = 'error';
      const expectedValue = { type: FETCH_GIPHY.ERROR, error };

      expect(fetchGiphy.error(error)).toEqual(expectedValue);
    });
  });
});
