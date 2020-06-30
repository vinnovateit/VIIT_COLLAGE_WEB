import React, { useEffect } from "react";
import Interface from "./components/Interface";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";
import Loading from "./components/Loading";
import Download from "./components/Download";
import { useDispatch } from "react-redux";
import { loadingstop } from "./actions/initialActions";
import Admin from "./components/Admin";
import Form from "./components/Form";

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
                <Route path="/beyondinfinity" component={Admin} />
                <Route path="/form" component={Form}></Route>
            </Switch>
        </Router>
    );
};

export default App;
