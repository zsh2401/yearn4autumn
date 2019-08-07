import React from 'react';
import Valine from 'valine';
import AV from 'leancloud-storage'
export interface IVCommentProps{
    path?:string | undefined;
}
export  class ValineComment extends React.Component<IVCommentProps>{
    componentDidMount(){
        new Valine({
                av: AV, 
                el: "#vcomment",
                emoticon_url: 'https://cloud.panjunwen.com/alu',
                emoticon_list: ["狂汗.png","不说话.png","汗.png","坐等.png","献花.png","不高兴.png","中刀.png","害羞.png","皱眉.png","小眼睛.png","暗地观察.png"],
                app_id: "QOFSJwU9VLLKTx9O5rsubQAT-gzGzoHsz",
                app_key: "tbxvzkH4jwUeBCtaGycRCJTT",
                path:this.props.path,
                placeholder: '和谐上网,爱慕秋'
        });
    }
    render(){
        return (
            <div>
                <br></br>
                <h3>评论区</h3>
                <div id="vcomment"></div>
            </div>
        )
    }
}