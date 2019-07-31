import React from 'react';
import CNZZ from './CNZZ';
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
                            <a className="nav-link" href="#">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">酷安</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">商务合作</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">关于</a>
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
                        <CNZZ></CNZZ>
                        </div>
                    </div>
                    <br/>
                </div>
            </footer>)
    }
}