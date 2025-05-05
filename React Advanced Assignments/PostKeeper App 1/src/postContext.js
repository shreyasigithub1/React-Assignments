// create post context here

// Create custom hook that returns context value here

// create a custom saved post provider here with add and reset functions

import { createContext,useContext,useState } from "react";

const postContext = createContext();

export function useCustomHook() {
    const value = useContext(postContext);
    return value;
}

export function CustomContextProvider({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);

    const [showSavedList, setShowSavedList] = useState(false);
    function handleReset() {
        setSavedPosts([]);
    }
    function handleSave(id,image,text) {
        setSavedPosts([...savedPosts, { id, image, text }]);
    }
  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, showSavedList, setShowSavedList,handleReset,handleSave }}
    >
      {children}
    </postContext.Provider>
  );
}
