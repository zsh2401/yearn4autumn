import React from 'react';
import ReactDOM from 'react-dom'
import {StdApp} from '../../app'
class App extends React.Component{
    render(){
        return <StdApp>
            <h1>Donate Y4A.FUN!</h1>
        </StdApp>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))