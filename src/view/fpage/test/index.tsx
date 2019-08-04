import React from 'react';
import ReactDOM from 'react-dom'
import {AppLayout} from '../../controls';
class App extends React.Component{
    render(){
        return (<AppLayout>
            <h1>测试模块</h1>
        </AppLayout>)
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))