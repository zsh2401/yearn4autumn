import React from 'react';
import ReactDOM from 'react-dom';
import StdApp from "../../controls/StdApp"
import BVideo from '../../controls/BVideo'
class App extends React.Component{
    render(){
        return (
        <StdApp>
            <h1>404 Not Found!</h1>
            <BVideo src="//player.bilibili.com/player.html?aid=6576583&cid=10716903&page=1"></BVideo>
        </StdApp>);
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));