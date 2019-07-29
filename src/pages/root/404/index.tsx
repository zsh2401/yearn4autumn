import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    render(){
        return <h1>404 NOT FOUND!</h1>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));