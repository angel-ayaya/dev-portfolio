// src/App.js
import React from "react";
import BackgroundVideo from "./Components/BackgroundVideo";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BackgroundVideo />
      <div className="content">
        <h1>Bienvenido a mi Aplicación</h1>
        <h2>Projectos personales</h2>
        <div className="projects-section">
          <figure>
            <a href="/calculator">
              <button>Calculator</button>
            </a>
          </figure>
          <figure>
            <a href="/todo">
              <button>To-Do List</button>
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default App;
