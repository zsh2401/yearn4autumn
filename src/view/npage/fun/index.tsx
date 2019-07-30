import React from 'react';
import ReactDOM from 'react-dom'
import StdApp from '../../controls/StdApp';
import { IFunManifest } from '../../../common/buildV2/Manifest';
import FList from './FList';
declare let __DATA:Array<IFunManifest>;
class App extends React.Component{
    render(){
        return (<StdApp>
            <h1>库</h1>
            <FList funs={__DATA}></FList>
        </StdApp>)
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))