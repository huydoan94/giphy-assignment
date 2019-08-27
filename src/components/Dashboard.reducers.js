import { actionTypes } from './Dashboard.actions';

const initialState = {
  pictures: [],
  isFetching: false,
  errorCode: null,
};

const dashboard = (state = initialState, { type, pictures, error }) => {
  switch (type) {
    case actionTypes.FETCH_GIPHY.START:
      return {
        ...state,
        isFetching: true,
        errorCode: null,
      };
    case actionTypes.FETCH_GIPHY.SUCCESS:
      return {
        ...state,
        pictures,
        isFetching: false,
        errorCode: null,
      };
    case actionTypes.FETCH_GIPHY.ERROR:
      return {
        ...state,
        isFetching: false,
        errorCode: error,
      };
    case actionTypes.CLEAR_ERROR_CODE:
      return {
        ...state,
        errorCode: null,
      };
    default:
      return state;
  }
};

export default {
  dashboard,
};
