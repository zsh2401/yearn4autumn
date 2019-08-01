import React from 'react';
import ReactDOM from 'react-dom';
import {BVideo,ScriptTag} from "../../controls"
import {StdApp} from '../../app'
import * as dm from '../../../common/data-manager'
class App extends React.Component{
    render(){
        return (
        <StdApp>
            <h1>404 Not Found!</h1>
            <BVideo src="//player.bilibili.com/player.html?aid=6576583&cid=10716903&page=1"></BVideo>
            <ScriptTag src="//fuck.js"></ScriptTag>
        </StdApp>);
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));
console.log("wow");
console.log(dm.getALLPages());
console.log(dm.getExtData());