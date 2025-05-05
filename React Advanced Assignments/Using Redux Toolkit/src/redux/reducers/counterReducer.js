// remove the counter action creators imports
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method
// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// export the counter reducer function and action creators here

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increament: (state, action) => {
      state.count = state.count + 1;
    },
    decreament: (state, action) => {
      state.count = state.count - 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const actions = counterSlice.actions;
