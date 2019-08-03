require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom';
import {Notice, NavBar, Footer,AppLayout} from '../../controls';
import { url } from 'inspector';
const img = require('./headbg.jpg');

class App extends React.Component{
    render(){
        return(
            <AppLayout type="fluid" enableNotice={false}>
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
                <h1 className="text-in-white">Yearn For Autumn 慕秋</h1>
                <h3 className="text-in-white">Y4A.FUN</h3>
            </div>
        </div>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));