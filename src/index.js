import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./Pages/Calculator";
import ToDo from "./Pages/ToDo";
import Substract from "./Pages/Substract";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/substract" element={<Substract />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
