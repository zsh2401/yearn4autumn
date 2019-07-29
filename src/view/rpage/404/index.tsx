import React from 'react';
import ReactDOM from 'react-dom';
import StdApp from "../../controls/StdApp"
class App extends React.Component{
    render(){
        return (
        <StdApp>
            <h1>404 Not Found!</h1>
        </StdApp>);
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));