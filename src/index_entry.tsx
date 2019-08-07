import React from 'react';
import ReactDOM from 'react-dom'
import {Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import Index from "./pages/Index";
import About from "./pages/About";
class AppRouter extends React.Component{
    render(){
        return <Router path="/" component={Index}>
            <Route path="/" component={Index}></Route>
            <Route path="/about" component={About}></Route>
        </Router>
    }
}
ReactDOM.render(<AppRouter></AppRouter>,document.querySelector("#app"));