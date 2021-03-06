import React from 'react';
import {Link} from 'react-router-dom'
import {BVideo} from "../../controls"
import {StdLayout} from "../../controls/layout"
export default class Page404 extends React.Component{
    render(){
        return (
            <StdLayout>
                <h1>404 Not Found!</h1>
                <h3>找不到你需要的页面!</h3>
                <Link className="text-center" to="/">回到主页</Link>
                <BVideo src="//player.bilibili.com/player.html?aid=6576583&cid=10716903&page=1"></BVideo>
            </StdLayout>);
    }
}