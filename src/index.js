import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Switch from "react-bootstrap/cjs/Switch";
import Login from "./components/Login";
import {Provider} from "react-redux";
import configureStore from "./store";


configureStore()
    .then((res) => {
        const store = res;
        // console.log(store.getState().dataSummary);
        // const rootEl = document.getElementById('app-site');
        // Create a reusable render method that we can call more than once
        let render = () => {
            // Dynamically import our main App component, and render it
            const App = require('./App').default;

            ReactDOM.render(<Provider store={store}>
                    <Router>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/" component={App}/>
                        </Switch>
                    </Router>
                </Provider>,
                document.getElementById('root')
            );
        };
        render();
    });


//
//
// const routing = (
//     <Provider store={store}>
//         <Router>
//             <Switch>
//                 <Route exact path="/a" component={App}/>
//                 <Route path="/users" component={NavBar}/>
//                 <Route path="/login" component={Login}/>
//                 {/*<Route exact path="/**" component={PageNotFound}/>*/}
//             </Switch>
//         </Router>
//     </Provider>
// );
//
//
// ReactDOM.render(routing, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
