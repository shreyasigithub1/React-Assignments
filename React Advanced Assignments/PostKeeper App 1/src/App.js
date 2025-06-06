import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import { CustomContextProvider } from "./postContext";

export default function App() {
  return (
    //Add the Context provider here
    <CustomContextProvider>
      <div className="App">
        <Navbar />
        <List />
      </div>
    </CustomContextProvider>
  );
}
