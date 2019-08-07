import React, { ReactNode } from 'react';
import {Notice,Footer,NavBar,SplitLine} from '.';
import { FlexDirectionProperty } from 'csstype';
export interface AppLayoutProps{
    enableNotice?:boolean;
    enableNavBar?:boolean;
    type?:"default" | "std" | "plain" | "fluid";
}
export class AppLayout extends React.Component<AppLayoutProps>{
    render(){
        switch(this.props.type){
            case "plain":
                return this.renderPlain();
            case "fluid":
            case "default":
            case "std":
            default:
                return this.doRender();
        }
    }

    private doRender(){
        return <this.AppOuter paddingTop={this.getOuterPaddingTop()}>
            <this.NavBarIfEnable enable={this.props.enableNavBar}></this.NavBarIfEnable>
            <this.AppContainer type={this.props.type}>
                <this.NoticeIfEnable enable={this.props.enableNotice}></this.NoticeIfEnable>
                {this.props.children}
            </this.AppContainer>
            <Footer flex="0 0 auto"></Footer>
        </this.AppOuter>
    }
    private getOuterPaddingTop():string{
        if(this.props.enableNavBar || this.props.enableNavBar == null){
            return "50px"
        }else{
            return "0px";
        }
    }
    private AppOuter(props){
        return (<div style={{
            height:'100%',
            paddingTop: props.paddingTop,
            backgroundColor:'white',
            display: 'flex',
            flexDirection: "column"}}>
            {props.children}
        </div>)
    }
    private AppContainer(props){
        switch(props.type){
            case "fluid":
                return <div style={{flex:"1 0 auto"}}>{props.children}</div>
            case "default":
            case "std":
            default:
                return <div className="container" style={{flex:"1 0 auto"}}>{props.children}</div>
        }
    }
    private NavBarIfEnable(props){
        if(props.enable || props.enable == null){
            return <NavBar></NavBar>
        }else{
            return null;
        }
    }
    private NoticeIfEnable(props){
        if(props.enable || props.enable == null){
            return <Notice></Notice>;
        }else{
            return null;
        }     
    }
    private renderPlain(){
        return <div>{this.props.children}</div>
    }
}