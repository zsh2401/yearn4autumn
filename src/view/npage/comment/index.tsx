import React from 'react';
import ReactDOM from 'react-dom'
import StdApp from '../../controls/StdApp'
import VComment from '../../controls/ValineComment'
class App extends React.Component{
    render(){
        return <StdApp>
            <h1>Comment Y4A.FUN!</h1>
            <VComment path="comment"></VComment>
        </StdApp>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))