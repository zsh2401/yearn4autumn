import React from 'react';
import {CNZZ} from './';
import * as dm from '../../common/data-manager'
export class Footer extends React.Component{
    readonly style = {
        fontSize:"14px",
        flex: '0 0 auto'
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
                            编译时间: {dm.getCompileDate()}
                            <br/>
                            <CNZZ></CNZZ>
                            {/* <ScriptTag type="text/javascript">console.log('tst'); document.write(unescape("%3Cspan id='cnzz_stat_icon_1277812477'%3E%3C/span%3E%3Cscript src='//s23.cnzz.com/z_stat.php%3Fid%3D1277812477%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</ScriptTag> */}
                        </div>
                    </div>
                    <br/>
                </div>
            </footer>)
    }
}