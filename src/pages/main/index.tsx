import React from 'react'
import {MdLayout} from './MainLayout'
import { BrowserRouter as Router, Route,Link, Switch, Redirect } from "react-router-dom";
export interface IMainPageState{
    
}
export default class MainPage extends React.Component<any,IMainPageState>{
    switchToHome(){}
    switchToDiscover(){}
    switchToFav(){}
    switchToOther(){}
    render(){
        return <MdLayout>
           <h1>Home</h1>
        </MdLayout>
    }
}