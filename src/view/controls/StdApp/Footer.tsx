import React from 'react';
import CNZZ from './CNZZ';
export default class Footer extends React.Component{
    render(){
        return(
            <footer className="bg-light">
                <div className="container">
                    <div className="d-flex">
                        <div className="p-2">
                            <p>联系</p>
                            <p>zsh2401@163.com</p>
                            <p>群:468029710</p>
                        </div>
                        <div className="p-2">
                            <p>开放源代码</p>
                            <a href="https://github.com/zsh2401/yearn4autumn">y4a@Github</a>
                        </div>
                        <div className="p-2">
                            <p>友情链接</p>
                            <a href="ttps://zsh2401.top">2401的晚秋咖啡</a><br></br>
                            <a href="ttps://atmb.top">秋之盒</a>
                        </div>
                    </div>
                    <p className="text-center">Love you,Yin</p>
                    <p className="text-center">Copyright © 2019 - 2020 zsh2401,All Rights Reserved</p>
                    <CNZZ></CNZZ>
                    <br/>
                    </div>
            </footer>)
    }
}