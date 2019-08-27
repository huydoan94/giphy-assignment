const FETCH_GIPHY = {
  START: 'FETCH_GIPHY_START',
  SUCCESS: 'FETCH_GIPHY_SUCCESS',
  ERROR: 'FETCH_GIPHY_ERROR',
};

const CLEAR_ERROR_CODE = 'CLEAR_ERROR_CODE';

const fetchGiphy = {
  start: (offset, limit, isAppend) => ({
    type: FETCH_GIPHY.START, offset, limit, isAppend,
  }),
  success: pictures => ({ type: FETCH_GIPHY.SUCCESS, pictures }),
  error: error => ({ type: FETCH_GIPHY.ERROR, error }),
};

const clearErrorCode = () => ({ type: CLEAR_ERROR_CODE });

const actions = { fetchGiphy, clearErrorCode };
const actionTypes = { FETCH_GIPHY, CLEAR_ERROR_CODE };

export {
  actions,
  actionTypes,
};
