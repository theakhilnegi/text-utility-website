import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeClass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-secondary");
  };

  const toggleMode = (cls) => {
    removeClass();
    document.body.classList.add("bg-" + cls);
    if (cls === "light") {
      setMode("light");
    } else if (cls === "dark") {
      setMode("dark");
    } else {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#7F8487";
        // showAlert("Dark mode has been enabled", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        // showAlert("Light mode has been enabled", "success");
      }
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextFrom
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
