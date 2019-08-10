import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";

import P404 from "./pages/404";
import Main from "./pages/main";
export default class AppRouter extends React.Component{
    render(){
        return (<Router>
                <Switch>
                    <Route exact path="/"  component={Main}></Route>
                    <Route path="*" component={P404}></Route>
                </Switch>
            </Router>)
    }
}