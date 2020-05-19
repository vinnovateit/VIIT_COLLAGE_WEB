import React, { useEffect } from "react";
import Interface from "./components/Interface";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interface" component={Interface} />
        <Route path="/display" component={Display} />
      </Switch>
    </Router>
  );
};

export default App;
