import React, { ReactNode } from 'react';
import {Notice,Footer,NavBar,SplitLine} from '.';
// import NavBarMargin from './NavBarMargin';
export interface AppLayoutProps{
    navbar?:"std" | "transparent";
}
export class AppLayout extends React.Component<AppLayoutProps>{
    render(){
        return <this.AppOuter>
        <NavBar></NavBar>
        {/* <NavBarMargin></NavBarMargin> */}
        <div style={{flex:"1 0 auto"}}>
            {this.props.children}
        </div>
        <div style={ {flex:"0 0 auto"}}>
            <Footer></Footer>
        </div>
    </this.AppOuter>
    }
    private AppOuter(props){
        return (<div style={{
            height:'100%',
            paddingTop: props.paddingTop,
            display: 'flex',
            flexDirection: "column"}}>
            {props.children}
        </div>)
    }
}