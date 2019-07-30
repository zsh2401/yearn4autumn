import React from 'react'
import ReactDOM from 'react-dom/server'
interface IStdReactPageProps{
    data:any;
}
class StdReactPage extends React.Component<IStdReactPageProps>{
    render(){
        return (
        <html>
            <head>
                <script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
                <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>

                <script src="https://cdn.bootcss.com/react/16.8.6/umd/react.production.min.js"></script>
                <script src="https://cdn.bootcss.com/react-dom/16.8.6/umd/react-dom.production.min.js"></script>

            
                <link href="https://cdn.bootcss.com/antd/3.20.7/antd.min.css" rel="stylesheet"></link>
                <script src="https://cdn.bootcss.com/antd/3.20.7/antd.min.js"></script>

                <script src="https://cdn.jsdelivr.net/npm/leancloud-storage@3.14.1/dist/av-min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/valine@1.3.9/dist/Valine.min.js"></script>

                <link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
                <script src="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
                
                <title>Untitled</title>
                <meta charSet='utf-8'></meta>
            </head>
            <body>
                <div id="app"></div>
            </body>
        </html>)
    }
}

export default function render(data:any){
    module.exports = ReactDOM.renderToString(<StdReactPage data={data}></StdReactPage>);
}