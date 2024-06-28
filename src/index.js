import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./Pages/Calculator";
import ToDo from "./Pages/ToDo";
import Substract from "./Pages/Substract";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/todo",
    element: <ToDo />,
  },
  {
    path: "/substract",
    element: <Substract />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
