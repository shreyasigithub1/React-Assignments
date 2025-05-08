import { useEffect } from "react";
import { List } from "../components/List";
// import comments actions here
import { actions } from "../redux/reducers/commentsReducer";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const getComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      console.log(data);
      // dispatch fetch success action here
      dispatch(actions.success(data));
    } catch (e) {
      // dispatch fetch error action here
      dispatch(actions.error());
    }
  };

  useEffect(() => {
    // dispatch fetch start action here
    dispatch(actions.loading());
    // execute the getComments function here
    getComments();
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
