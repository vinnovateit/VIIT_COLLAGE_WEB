import React, { useEffect } from "react";
import Interface from "./components/Interface";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";
import Loading from "./components/Loading";
import Download from "./components/Download";
import { useDispatch } from "react-redux";
import { loadingstop } from "./actions/initialActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingstop());
  }, []);
  return (
    <Router>
      <Loading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interface" component={Interface} />
        <Route path="/display" component={Display} />
        <Route path="/download" component={Download} />
        <Route path="/beyondinfinity" component={Download} />
      </Switch>
    </Router>
  );
};

export default App;
