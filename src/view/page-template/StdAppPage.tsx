import React from 'react';
import ReactDOM from 'react-dom/server';
import {StdPage} from './StdPage';
export default function(data){
    return ReactDOM.renderToString(
    <StdPage compileData={data.htmlWebpackPlugin.options}>
        <div id="app"></div>
    </StdPage>);
}