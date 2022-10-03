import React, { useState } from "react";
import "./App.css";
// import About from "../../tectutility/src/components/About";
import Navbar from "../../tectutility/src/components/Navbar";
import TextForm from "../../tectutility/src/components/TextForm";
import Alert from "../../tectutility/src/components/Alert";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    }, 3000);
  };
  const toggleMode1 = () => {
    if (mode === "green") {
      setMode("blue");
      document.body.style.backgroundColor = "#182C75";
      showAlert("Blue mode has been enables", "success");
    } else {
      setMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("Green mode has been enables", "success");
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enables", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enables", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Bashir Ahmed and Son's"
          mode={mode}
          aboutText="About us"
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
            <TextForm
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
          />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
