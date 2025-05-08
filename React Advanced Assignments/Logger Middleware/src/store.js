import { configureStore } from "@reduxjs/toolkit";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");
import { loggerMiddleware } from "./redux/middlewares/loggerMiddleware";

// import middleware function here

// add the middleware function below
export const store = configureStore({
  reducer: { timerReducer, counterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
