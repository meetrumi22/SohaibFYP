import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Layout from "./Layout/layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Createtable from "./pages/Createtable.jsx";
import AddTeacher from "./pages/AddTeacher.jsx";
import ShowTeacher from "./pages/TeacherShow.jsx";
import ShowClass from "./pages/ShowClass.jsx";
import ShowSection from "./pages/ShowSection.jsx";
import ShowSubject from "./pages/ShowSubject.jsx";
import AddClasses from "./pages/AddClasses.jsx";
import AddSection from "./pages/AddSection.jsx";
import AddSubject from "./pages/AddSubject.jsx";
import ConfigTeacher from "./pages/ConfigTeacher.jsx";
import ConfigClasses from "./pages/ConfigClasses.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/createtable",
        element: <Createtable />,
      },
      {
        path: "/addteacher",
        element: <AddTeacher />,
      },
      {
        path: "/addclass",
        element: <AddClasses />,
      },
      {
        path: "/addsection",
        element: <AddSection />,
      },
      {
        path: "/addsubject",
        element: <AddSubject />,
      },
      {
        path: "/configteacher",
        element: <ConfigTeacher />,
      },
      {
        path: "/configclass",
        element: <ConfigClasses />,
      },

      {
        path: "createtable/showteacher",
        element: <ShowTeacher />,
      },
      {
        path: "createtable/showclass",
        element: <ShowClass />,
      },
      {
        path: "createtable/showsection",
        element: <ShowSection />,
      },
      {
        path: "createtable/showsubject",
        element: <ShowSubject />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
