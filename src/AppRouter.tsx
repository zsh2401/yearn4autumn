import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
export default class AppRouter extends React.Component{
    render(){
        return (
        <Router>
            <Route exact path="/" component={Index}></Route>
            <Route path="/about" component={About}></Route>
            
        </Router>
        )
    }
}