import React from 'react';
export default class Cotainer extends React.Component{
    render(){
        return <div className='container' style={{background:'white'}}>{this.props.children}</div>
    }
}