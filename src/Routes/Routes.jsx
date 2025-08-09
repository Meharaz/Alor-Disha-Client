import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Members from "../Pages/Members/Members";
import Gallary from "../Pages/Gallary/Gallary";
import Donation from "../Pages/Donation/Donation";
import Projects from "../Pages/Projects/Projects";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/services",
            element: <Services/>
        },
        {
            path: "/members",
            element: <Members/>
        },
        {
            path: "/gallary",
            element: <Gallary/>
        },
        {
            path: "/donation",
            element: <Donation/>
        },,
        {
            path: "/projects",
            element: <Projects/>
        }

      ]
    },
  ]);