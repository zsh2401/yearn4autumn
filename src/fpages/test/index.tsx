import React from 'react';
import * as fm from '../../common/fpage-manager'
import { render } from 'react-dom';
fm.register({
    name:"test app",
    hide:true,
    description:"gogogog",
    auth:"zsh2401",
    version:"1.0.0",
    iconSrc:"",
    title:"",
    path:"f-test"
});
export default class TestFApp extends React.Component{
    render(){
        return "fuck";
    }
}