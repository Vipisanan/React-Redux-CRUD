import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Switch from "react-bootstrap/cjs/Switch";
import Login from "./components/Login";


const routing = (
        <Router>
            <Switch>
                <Route exact path="/a" component={App}/>
                <Route path="/users" component={NavBar}/>
                <Route path="/login" component={Login}/>
                {/*<Route exact path="/**" component={PageNotFound}/>*/}
            </Switch>
        </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
