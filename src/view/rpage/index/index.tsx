require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom'
import {StdApp} from '../../app';
require('./index.css');
class App extends React.Component{
    render(){
        return(
            <StdApp enableNoticeComponent={false}>
                    <div className="jumbotron text-center title-screen">
                        <h1>慕秋</h1>
                        <h3>Y4A.FUN</h3>
                        <br/><br/><br/>
                        <div className="btn-group">
                            <button className="btn btn-success">立刻上手-></button>
                            <button className="btn btn-secondary">添加到桌面</button>
                        </div>
                    </div>
                    {/* <ValineComment></ValineComment> */}
            </StdApp>)
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))