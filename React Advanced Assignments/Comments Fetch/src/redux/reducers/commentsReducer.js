import { createSlice } from "@reduxjs/toolkit";

// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentsSlice = createSlice({
  name: "comment",
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = "failed to fetch comments";
    },
    success: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.comments = [...action.payload];
    },
  },
});

// export the comments reducer function and action creators here

export const commentReducer = commentsSlice.reducer;

export const actions = commentsSlice.actions;

// export the comments selector function here
export const commentSelector = (state) => state.commentReducer;
