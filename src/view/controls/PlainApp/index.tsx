import React from 'react';
export default class Plain extends React.Component{
    render(){
        return <div>{this.props.children}</div>
    }
}