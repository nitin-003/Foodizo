import './App.css';
import React, {lazy, Suspense, useState, useEffect} from 'react';
import Header from "./components/Header";
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
import UserContext from './utils/UserContext';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';

// Chunking 
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading

const About = lazy(() => import("./components/About"));


const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    const data = {
      name: "Nitin Pathak",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
          <Header />
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Correctly define the appRouter using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
]);

function App() {
  return (
      <RouterProvider router={appRouter} />
  );
}

export default App;






