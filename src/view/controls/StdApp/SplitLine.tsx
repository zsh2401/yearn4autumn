import React from 'react';
export default class SplitLine extends React.Component{
    readonly style = {
        height:'5px',
        width:'100%',
        background:'white'
    }
    render(){
        return <div style={this.style}></div>
    }
}