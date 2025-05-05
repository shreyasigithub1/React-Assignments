import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";

// ✅ High-level protected route
const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // ✅ Wrap protected routes
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: (
            <Home loggedIn={isLoggedIn} setLoggedin={setIsLoggedIn} />
          ),
        },
        {
          path: "contact",
          element: (
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Contact />
            </PrivateRoute>
          ),
        },
        {
          path: "list",
          children: [
            {
              index: true,
              element: (
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <List />
                </PrivateRoute>
              ),
            },
            {
              path: ":itemId",
              element: (
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ItemDetails />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
