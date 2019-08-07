require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom';
import {AppLayout,TransparentNavBar} from '../../controls';
import sentence from '../../../common/sentence'
import {DoubleCol} from './DoubleCol'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
OfflinePluginRuntime.applyUpdate();
class App extends React.Component{
    render(){
        console.log('abcdefg');
        return(
            <AppLayout type="fluid" enableNavBar={false} enableNotice={false}>
                <Header></Header>
                <div style={{height:'20px'}}></div>
                <div className="container">
                    <DoubleCol pictureSrc="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=a5ae3bea9d0a304e462fa8a8b0a1cce3/80cb39dbb6fd526688a773faa118972bd507364b.jpg">
                        <div className="text-center">
                            <h2>响应式站点</h2>
                            <p>全平台,全屏幕,全分辨率适配,随处可用</p>
                            <p>基于<a href="https://getbootstrap.com/"><i>Bootstrap 4</i></a></p>
                        </div>
                    </DoubleCol>
                    <DoubleCol contentPosition="right" pictureSrc="https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png">
                        <div className="text-center">
                            <h2>渐进式网页应用<small><br/> Progressive Web App</small> </h2>
                            <p>可添加到桌面,实现原生App体验,断网也能用!</p>
                            <a href="/add-to-desktop"><i>立刻尝试</i></a>
                        </div>
                    </DoubleCol>
                    <DoubleCol contentPosition="left" pictureSrc={require('./github.png')}>
                        <div className="text-center">
                            <h2>开放源代码</h2>
                            <p>网站构建代码以LGPL3.0协议开源<br></br>欢迎提交PR与ISSUE</p>
                            <br/>
                            <small>技术栈: TypeScript Node.js Webpack Bootstrap...</small>
                            <br/>
                            <a href="https://github.com/zsh2401/yearn4autumn"><i>Github</i></a>
                        </div>
                    </DoubleCol>
                </div>
            </AppLayout>)
    }
}
interface IHeaderState{
    sentence:string;
}
class Header extends React.Component<any,IHeaderState>{
    constructor(props){
        super(props);
        this.state = {
            sentence: sentence()
        }
    }
    render(){
        return <div className="header">
            <TransparentNavBar></TransparentNavBar>
            <div className="jumbotron container" style={{background:'transparent'}}>
                <h1 className="text-white"><b>Yearn For Autumn</b></h1>
                <h3 className="text-white">你的全能工具箱</h3>
                <button onClick={function(){window.location.href = "/fav"}} className="btn btn-light no-radius">立刻上手-></button>
                <div className="clearfix-sm d-sm-none"></div>
                <div className="clearfix d-none d-md-block"></div>
            </div>
            <HeaderBottomBar><i>{this.state.sentence}</i></HeaderBottomBar>
        </div>
    }
}
class HeaderBottomBar extends React.Component{
    render(){
        return <div className="bottom">
        <div className="container">{this.props.children}</div>
    </div>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"));