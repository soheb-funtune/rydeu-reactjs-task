import logo from "./logo.svg";
import "./App.css";
import MuiNavbar from "./components/mui-navbar/MuiNavbar";
import styled from "styled-components";
import HomeContent from "./components/home-content/HomeContent";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import CityPage from "./components/City/CityPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper></Wrapper>,
      children: [
        {
          index: true,
          // path: "home",
          element: <HomeContent />,
        },
        {
          path: "/city",
          element: <CityPage />,
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

export default App;
