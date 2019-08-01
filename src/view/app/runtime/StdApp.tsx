import React from 'react';
import {Notice,Footer,NavBar,SplitLine} from '../../controls';
export interface StdAppProps{
    enableNoticeComponent?:boolean;

}
export class StdApp extends React.Component<StdAppProps>{
    readonly containerStyle={
        padding:'10px'
    }
    completeRrops(){
    }
    render(){
        this.completeRrops();
        return (<div>
            <NavBar></NavBar>
            <SplitLine></SplitLine>
            <div className='container' style={this.containerStyle}>
                {(this.props.enableNoticeComponent || this.props.enableNoticeComponent == null) &&
                    <Notice></Notice>
                }
                {this.props.children}
            </div>
            <SplitLine></SplitLine>
            <Footer></Footer>
        </div>)
    }
}