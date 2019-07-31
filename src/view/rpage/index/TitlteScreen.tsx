import React from 'react';
export default class TitleScreen extends React.Component{
    render(){
        return (
        <div className="jumbotron header">
            <h1 className="text-center">慕秋</h1>
            <h5 className="text-center">yearn4autumn</h5>
            <p className="text-center">
            <br/>
            <div className="btn-group">
                <button className="btn btn-success">开始使用</button>
                <button className="btn btn-light">浏览源代码</button>
            </div>
            </p>
        </div>);
    }
}