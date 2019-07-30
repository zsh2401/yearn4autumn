import React from 'react';
import CNZZ from './CNZZ';
export default class Footer extends React.Component{
    readonly customStyle = {
        maxWidth:"600px",
        marginLeft:"auto",
        marginRight:"auto"
    }
    render(){
        return(
            <footer style={this.customStyle}>
            <div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <h4>联系</h4>
                            <h5>zsh2401@163.com</h5>
                            <h5>群:468029710</h5>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <h4>开放源代码</h4>
                            <a href="https://github.com/zsh2401/yearn4autumn">y4a@Github</a>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <h4>友情链接</h4>
                            <a href="ttps://zsh2401.top">2401的晚秋咖啡</a><br></br>
                            <a href="ttps://atmb.top">秋之盒</a>
                        </div>
                    </div>
                    <h6 className="text-center">Love you,Yin</h6>
                    <h6 className="text-center">Copyright © 2019 - 2020 zsh2401,All Rights Reserved</h6>
                    <CNZZ></CNZZ>
                    <br/>
                    </div>
            </footer>)
    }
}