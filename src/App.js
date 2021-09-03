import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textarea from "./components/Textarea";
import Page from "./components/Page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  const remove = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) => {
    remove();
    document.body.classList.add('bg-' + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // showAlert("Dark mode is enabled", "success");
      // setInterval(() => {
      //   document.title = "This site is Amazing!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Download it ASAP!!";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            <Route
              excat path="/about"
              render={(props) => (
                <Page title="Text Utils | About">
                  <About {...props} />
                </Page>
              )}
            />
            <Route excat path="/"
            render={(props) => (
              <Page title="Text Utils | Home">
                <Textarea
                showAlert={showAlert}
                heading="Text Analyzer"
                mode={mode}
                {...props}
              />
              </Page>
            )}>
              
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
