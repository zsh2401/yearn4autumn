import React from 'react';
import ReactDOM from 'react-dom/server';
export interface StdPageProps{
    compileData:any;
}
export class StdPage extends React.Component<StdPageProps>{
    getScriptContent():any{
        return "var wtf = 'b'"
    }
    componentDidMount(){
        this.addScript(this.getScriptContent());
    }
    addScript(jsText){
        let eleScript = document.createElement('script');
        eleScript.innerHTML = jsText;
        document.getElementsByTagName("head")[0].appendChild(eleScript);
    }
    render(){
        return (<html>
            <title>{this.props.compileData.title}</title>
            <meta charSet='utf-8'></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            {/* 前置库 */}
            <script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
            <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>

            {/* react */}
            <script src="https://cdn.bootcss.com/react/16.8.6/umd/react.production.min.js"></script>
            <script src="https://cdn.bootcss.com/react-dom/16.8.6/umd/react-dom.production.min.js"></script>

            {/* antd */}
            <link href="https://cdn.bootcss.com/antd/3.20.7/antd.min.css" rel="stylesheet"></link>
            <script src="https://cdn.bootcss.com/antd/3.20.7/antd.min.js"></script>

            {/* valine */}
            <script src="https://cdn.jsdelivr.net/npm/leancloud-storage@3.14.1/dist/av-min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/valine@1.3.9/dist/Valine.min.js"></script>

            {/* bootstrap 3 */}
            {/* <link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link> */}
            {/* <script src="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script> */}

            {/* bootstrap 4 */}
            <link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

            <body>
                {this.props.children}
            </body>
        </html>)
    }
}
export default function(data)
{
    return ReactDOM.renderToString(<StdPage compileData={data.htmlWebpackPlugin.options}></StdPage>);
}