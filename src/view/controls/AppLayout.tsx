import React, { ReactNode } from 'react';
import {Notice,Footer,NavBar,SplitLine} from '.';
import { FlexDirectionProperty } from 'csstype';
export interface AppLayoutProps{
    enableNoticeComponent?:boolean;
    type?:"plain" | "std" | "no-container";
}
export class AppLayout extends React.Component<AppLayoutProps>{
    readonly outerStyle = {
        height:'100%'
    }
    readonly wrapperStyle={
        height:'100%',
        paddingTop:'50px',
        backgroundColor:'white',
        display: 'flex',
        flexDirection: "column" as FlexDirectionProperty
    }
    readonly containerStyle={
        padding:'10px',
        flex: '1 0 auto'
    }
    readonly rawContainerStyle={
        flex: '1 0 auto'
    }
    render(){
        switch(this.props.type){
            case "plain":
                return this.renderPlain();
            case "no-container":
                return this.renderNoContainer();
            case "std":
            default:
                return this.renderStd();
        }
    }
    private renderNoContainer(){
        return (<div style={{height:'100%'}}>
            <NavBar></NavBar>
            <div style={this.wrapperStyle}>
                <div style={this.rawContainerStyle}>
                    {(this.props.enableNoticeComponent || this.props.enableNoticeComponent == null) &&
                        <Notice></Notice>
                    }
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        </div>)
    }
    private renderPlain(){
        return <div>{this.props.children}</div>
    }
    private renderStd(){
        return (<div style={{height:'100%'}}>
            <NavBar></NavBar>
            <div style={this.wrapperStyle}>
                <div className='container' style={this.containerStyle}>
                    {(this.props.enableNoticeComponent || this.props.enableNoticeComponent == null) &&
                        <Notice></Notice>
                    }
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        </div>)
    }
}