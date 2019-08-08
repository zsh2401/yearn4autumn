import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
import Home from "./pages/home";
import P404 from "./pages/404";
export default class AppRouter extends React.Component{
    render(){
        return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/404" component={P404}></Route>
                <Route path="*" component={P404}></Route>
            </Switch>
        </Router>
        )
    }
}