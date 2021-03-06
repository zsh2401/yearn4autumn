import React from 'react';
import {Link} from 'react-router-dom';
import {CNZZ} from './';
import * as dm from '../common/data-manager'
export class Footer extends React.Component{
    readonly style = {
        fontSize:"14px",
    }
    render(){
        return(
            <footer className="bg-light" style={this.style}>
                <div className="container">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/zsh2401/yearn4autumn">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://zsh2401.top">开发者博客</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/com">商务合作</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">关于</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/404">404</Link>
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
                            编译时间: {dm.getCompileDate()}
                            <br/>
                            <CNZZ></CNZZ>
                        </div>
                    </div>
                    <br/>
                </div>
            </footer>)
    }
}