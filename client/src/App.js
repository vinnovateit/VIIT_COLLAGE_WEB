import React, { useEffect } from "react";
import Interface from "./components/Interface";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";
import Loading from "./components/Loading";
import Download from "./components/Download";

const App = () => {
  return (
    <Router>
      <Loading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interface" component={Interface} />
        <Route path="/display" component={Display} />
        <Route path="/download" component={Download} />
      </Switch>
    </Router>
  );
};

export default App;
