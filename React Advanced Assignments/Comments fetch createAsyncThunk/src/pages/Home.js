import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { List } from "../components/List";
// import async thunk action here
import { getCommentsAsync } from "../redux/reducers/commentsReducer";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/reducers/commentsReducer";

export const Home = () => {
  const dispatch = useDispatch();

  // remove this function and use it inside comments async thunk
  // const getComments = async () => {
    
  // };

  useEffect(() => {
    dispatch(fetchStart());
    // remove this and dispatch async thunk action here
    // getComments();
    dispatch(getCommentsAsync());
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
