// src/App.js
import React from "react";
import BackgroundVideo from "./Components/BackgroundVideo";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BackgroundVideo />
      <div className="content">
        <h1>Portafolio Dev Angel Ayala</h1>
        <p> En Progreso...</p>
        <h2>Projectos personales</h2>
        <div className="projects-section">
          <figure>
            <Link to="/calculator">
              <button>Calculator</button>
            </Link>
          </figure>
          <figure>
            <Link to="/todo">
              <button>To-Do List</button>
            </Link>
          </figure>
          <figure>
            <Link to="/substract">
              <button>Substract Layout</button>
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default App;
