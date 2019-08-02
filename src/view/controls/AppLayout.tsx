import React from 'react';
import {Notice,Footer,NavBar,SplitLine} from '.';
export interface AppLayoutProps{
    enableNoticeComponent?:boolean;
    type?:"plain" | "std";
}
export class AppLayout extends React.Component<AppLayoutProps>{
    readonly containerStyle={
        padding:'10px',
    }
    readonly wrapperStyle={
        backgroundColor:'white'
    }
    render(){
        switch(this.props.type){
            case "plain":
                return this.renderPlain();
            case "std":
            default:
                return this.renderStd();
        }
    }
    private renderPlain(){
        return <div>{this.props.children}</div>
    }
    private renderStd(){
        return (<div>
            <NavBar></NavBar>
            <SplitLine></SplitLine>
            <div style={this.wrapperStyle}>
                <div className='container' style={this.containerStyle}>
                    {(this.props.enableNoticeComponent || this.props.enableNoticeComponent == null) &&
                        <Notice></Notice>
                    }
                    {this.props.children}
                </div>
            </div>
            <SplitLine></SplitLine>
            <Footer></Footer>
        </div>)
    }
}