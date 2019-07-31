import React from 'react';
import ReactDOM from 'react-dom'
import StdApp from '../../controls/StdApp'
class App extends React.Component{
    render(){
        return <StdApp>
            <h1>与Y4A.FUN进行商务合作</h1>
        </StdApp>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))