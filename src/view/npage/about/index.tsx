import React from 'react';
import ReactDOM from 'react-dom'
import {AppLayout} from '../../controls'
class App extends React.Component{
    render(){
        return <AppLayout>
            <h1>About Y4A.FUN!</h1>
        </AppLayout>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))