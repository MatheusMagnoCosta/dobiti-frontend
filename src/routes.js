import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './views/home'
import Authentication from './views/authentication'


export default function App() {
    return (
<Router>
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Authentication />
        </Route>
    </Switch>
</Router>
)}