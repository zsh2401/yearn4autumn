require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom';
import {Notice, NavBar, Footer,AppLayout} from '../../controls';
import { url } from 'inspector';
const img = require('./headbg.jpg');
require('./index.css');
class App extends React.Component{
    render(){
        return(
            <AppLayout type="no-container" enableNoticeComponent={false}>
                <Header></Header>
                <div className="container">
                    <Notice></Notice>
                </div>
            </AppLayout>)
    }
}
class Header extends React.Component{
    render(){
        return <div id="header">
            <div className="container jumbotron" style={{background:'transparent'}}>
                <h1>Wow</h1>
            </div>
        </div>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));