import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { resetSelector } from "../redux/reducers/alertReducer";
import { resetAlert } from "../redux/reducers/alertReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Timer = () => {
  // get alert message here
  // create effect to reset alert message here
  const message = useSelector(resetSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        dispatch(resetAlert());
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [message, dispatch]);

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <div className="alert">{message}</div>}
      {/* <div className="alert"></div> */}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
