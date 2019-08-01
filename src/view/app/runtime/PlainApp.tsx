import React from 'react';
export class PlainApp extends React.Component{
    render(){
        return <div>{this.props.children}</div>
    }
}