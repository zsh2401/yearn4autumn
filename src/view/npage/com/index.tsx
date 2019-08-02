import React from 'react';
import ReactDOM from 'react-dom'
import {AppLayout} from '../../controls'
class App extends React.Component{
    render(){
        return <AppLayout>
            <h1>与Y4A.FUN进行商务合作</h1>
        </AppLayout>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))