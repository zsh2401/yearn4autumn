import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component{
    render():ReactNode{
        return <Title></Title>
    }
}
class Title extends React.Component{
    render(){
        return(
        <div>
            <h1>Hello react</h1>
            <h2>aaa</h2>
        </div>)
    }
}
export function render(){
    ReactDOM.render(<App></App>,document.querySelector("#react-root"));
}