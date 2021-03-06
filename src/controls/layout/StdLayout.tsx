import React from 'react';
import {Footer,TransparentNavBar} from '..';
import { NavBar } from '../NavBar';
export class StdLayout extends React.Component{
    render(){
        return <this.AppOuter>
        <TransparentNavBar></TransparentNavBar>
        <div className="bg-white" style={{flex:"1 0 auto"}}>
            <div className="container">
                {this.props.children}
            </div>
        </div>
        <div style={ {flex:"0 0 auto"}}>
            <Footer></Footer>
        </div>
    </this.AppOuter>
    }
    private AppOuter(props){
        return (<div style={{
            height:'100%',
            paddingTop: "56px",
            display: 'flex',
            flexDirection: "column"}}>
            {props.children}
        </div>)
    }
}