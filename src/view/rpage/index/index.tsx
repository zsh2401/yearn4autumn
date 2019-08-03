require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom';
import {Notice, NavBar, Footer,AppLayout} from '../../controls';
import { url } from 'inspector';
import { PositionProperty } from 'csstype';
const img = require('./headbg.jpg');

class App extends React.Component{
    render(){
        return(
            <AppLayout type="fluid" enableNotice={false}>
                <Header></Header>
                <div className="container">
                    
                </div>
            </AppLayout>)
    }
}
class Header extends React.Component{
    render(){
        return <div id="header">
            <div className="container jumbotron" style={{background:'transparent'}}>
                <h1 className="text-in-white"><b>Yearn For Autumn</b></h1>
                <h3 className="text-in-white">响应式在线工具站点</h3>
                <div style={{height:'15vh'}}></div>
                <BlurBgDiv>wtf</BlurBgDiv>
                <div className="row">
                    <Block title="Fun商店" desc="浏览你喜欢的功能" btnText="立刻浏览" btnLink="/fstore"></Block>
                    <Block title="库" desc="浏览你收藏的功能" btnText="立刻浏览" btnLink="/fav"></Block>
                    <Block title="发现" desc="或许,你需要一些东西" btnText="Go!" btnLink="/discover"></Block>
                    
                </div>
            </div>
        </div>
    }
}
interface BlockProps{
    title:string;
    desc:string;
    btnText:string;
    btnLink:string;
}
class Block extends React.Component<BlockProps>{
    render(){
        let that = this;
        return (<div className="col-md-4 col-sm-12">
            <div style={{padding:'10',filter:'blur(10px)'}}>
                <h4 className="text-in-white"><b>{this.props.title}</b></h4>
                <p className="text-in-white">{this.props.desc}</p>
                <button className="btn btn-primary" style={{borderRadius:"0"}} onClick={function(){window.location.href = that.props.btnLink}}>{this.props.btnText}</button>
            </div>
        </div>)
    }
}
class BlurBgDiv extends React.Component
{
    readonly blurLayout=
    {
        filter:'blur(10px)',
        background:"red"
    }
    readonly innerStyle={
        position:'absolute' as PositionProperty
    }
    private innerId:string;
    private outerId:string;
    private blurId:string;
    get divOuter():HTMLDivElement{
        return document.querySelector("#"+this.outerId);
    }
    get divInner():HTMLDivElement{
        return document.querySelector("#"+this.innerId);
    }
    get divBlur():HTMLDivElement{
        return document.querySelector("#"+this.blurId);
    }
    componentDidMount(){
        this.resetPosition();
        let that = this;
        window.addEventListener('resize',function(){that.resetPosition()})
    }
    private resetPosition(){
        let position = cumulativeOffset(this.divOuter);
        this.divBlur.style.height = this.divInner.offsetHeight + "px";
        this.divInner.style.left = position.left + "px";
        this.divInner.style.top = position.top + "px";
    }
    render(){
        this.outerId = this.generateId();
        this.innerId = this.generateId();
        this.blurId = this.generateId();
        return (<div id={this.outerId}>
                <div id={this.blurId} style={this.blurLayout}></div>
                <div id={this.innerId} style={this.innerStyle}>
                    {this.props.children}
                </div>
            </div>)
    }
    private generateId():string{
        return "fuck"+ (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
}
function cumulativeOffset(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};
ReactDOM.render(<App></App>,document.querySelector("#app"));