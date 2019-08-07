import React from 'react';
import ReactDOM from 'react-dom';
import {BVideo,ScriptTag,AppLayout} from "../../controls"
class App extends React.Component{
    render(){
        return (
        <AppLayout type="std">
            <h1>404 Not Found!</h1>
            <BVideo src="//player.bilibili.com/player.html?aid=6576583&cid=10716903&page=1"></BVideo>
            <ScriptTag src="//fuck.js"></ScriptTag>
        </AppLayout>);
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));