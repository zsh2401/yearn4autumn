import React from 'react';
import ReactDOM from 'react-dom/server';
import {StdPage} from './StdPage';
export default function(data){
    return ReactDOM.renderToString(
    <StdPage title={data.htmlWebpackPlugin.options.title} extraData={data.htmlWebpackPlugin.options.ext_data}>
        <div id="app" className="bg-light" style={{minHeight:'100vh'}}></div>
    </StdPage>);
}