// add counter action creators imports here
import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  RESET_COUNT,
} from "../actions/counterActions";
const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        count: state.count+1,
      };
    case DECREASE_COUNT:
      return {
        count: state.count-1,
      };
    case RESET_COUNT:
      return {
        count: 0,
      };
    default:
      return state;
  }
}
