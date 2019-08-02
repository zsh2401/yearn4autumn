require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom';
import {Notice, NavBar, Footer,AppLayout} from '../../controls';
require('./index.css');
class App extends React.Component{
    render(){
        return(
            <AppLayout type="plain">
                    <NavBar></NavBar>
                    <Header></Header>
                    <div>
                        <div className="container">
                            <Notice></Notice>
                        </div>
                    </div>
                    <Footer></Footer>
            </AppLayout>)
    }
}
class Header extends React.Component{
    render(){
        return <div>
            <h1>Fuck</h1>
        </div>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));