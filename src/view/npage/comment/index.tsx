import React from 'react';
import ReactDOM from 'react-dom'
import {StdApp} from '../../app'
import {ValineComment} from '../../controls'
class App extends React.Component{
    render(){
        return <StdApp>
            <h1>Comment Y4A.FUN!</h1>
            <ValineComment path="comment"></ValineComment>
        </StdApp>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))