import React from 'react';
import CNZZ from './CNZZ';
declare const compileDate:string;
export default class Footer extends React.Component{
    readonly footerStyle = {
        fontSize:"14px",
    }
    render(){
        return(
            <footer style={this.footerStyle}>
                <div className="container">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/zsh2401/yearn4autumn">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://zsh2401.top">开发者博客</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/com">商务合作</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">关于</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/404.html">404</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="p-3">
                            E-Mail: zsh2401@163.com
                        </div>
                        <div className="p-3">
                            QQ群: 468029710
                        </div>
                    </div>
                    <div className="d-flex .justify-content-sm-center">
                        <div className="p-3">
                            Love you,Yin <br/>
                            Copyright © 2019 - 2020 zsh2401,All Rights Reserved
                            <br/>
                            编译时间: {compileDate}
                            <br/>
                            <CNZZ></CNZZ>
                        </div>
                    </div>
                    <br/>
                </div>
            </footer>)
    }
}