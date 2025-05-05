// import action constants here
import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "../actions/fetchActions";
const INITIAL_STATE = { isLoading: false, data: [], error: null };

// define reducer function here
export const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

/**
 *   - Create and export a reducer function that handles the loading, success and error states of fetching asynchronous data.
   - For "FETCHLOADING"  set the isLoading as true and "Loading" should be displayed on the screen
    - For "FETCHSUCCESS" set the data with payload and also set the isLoading as false 
   - For the "FETCH_ERROR" set the error with payload ans set the isLoading as false and it "Failed to fetch" should be 
      displayed on the screen.
 */
