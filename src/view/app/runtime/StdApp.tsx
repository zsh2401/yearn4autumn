import React from 'react';
import {Notice,Footer,NavBar,SplitLine} from '../../controls';
export interface StdAppProps{
    enableNoticeComponent?:boolean;
}
export class StdApp extends React.Component<StdAppProps>{
    readonly containerStyle={
        padding:'10px',
    }
    readonly wrapperStyle={
        backgroundColor:'white'
    }
    render(){
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