import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
import { actions } from "../redux/reducers/timerReducer";
export { store } from "../store";

export const TimerActions = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning } = useSelector((state) => state.timerReducer);

  return (
    <div className="actions">
      <button disabled={isRunning} onClick={() => dispatch(actions.start())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => dispatch(actions.pause())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => dispatch(actions.reset())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
