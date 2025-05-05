import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
//import { incrementTimer } from "../redux/actions/timerActions";
import { timerReducer } from "../redux/reducers/timerReducer";
import { actions } from "../redux/reducers/timerReducer";
export { store } from "../store";
 
export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector((state) => state.timerReducer);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(actions.increment());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
