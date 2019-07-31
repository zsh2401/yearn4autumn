import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import SplitLine from './SplitLine';
export default class StdApp extends React.Component{
    readonly containerStyle={
        padding:'10px'
    }
    render(){
        return (<div>
            <NavBar></NavBar>
            <SplitLine></SplitLine>
            <div className='container' style={this.containerStyle}>
                {this.props.children}
            </div>
            <SplitLine></SplitLine>
            <Footer></Footer>
        </div>)
    }
}