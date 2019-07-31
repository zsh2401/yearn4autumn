import React from 'react';
export default class TitleScreen extends React.Component{
    render(){
        return (
        <div className="jumbotron jumbotron-fluid header text-center">
            <h1 style={{fontSize:'70px'}}>慕秋</h1>
            <h5>yearn4autumn</h5>
            <h5>响应式的在线工具集合站点,开源,免费,易用,无广告</h5>

            <button className="btn btn-primary" onClick={function(){window.location.href = '/fav'}}>立刻开始</button>
        </div>);
    }
}