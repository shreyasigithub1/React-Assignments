import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
export const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("timer/startTimer", (state, action) => {
        state.message = "Timer has started";
      })
      .addCase("timer/pauseTimer", (state, action) => {
        state.message = "Timer is paused";
      })
      .addCase("timer/resetTimer", (state, action) => {
        state.message = "Timer is set to 0";
      });
  },
});

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;
// create and export alert selector function here
export const resetAlert = alertSlice.actions.reset;

export const resetSelector = (state) => state.alertReducer.message;
