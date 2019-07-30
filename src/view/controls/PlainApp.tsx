import React from 'react';
import Container from './Container';
import RootContainer from './RootContainer';
export default class PlainApp extends React.Component
{
    render(){
        let cst = {
            margin:"0px",
            padding:"0px"
        }
        return <RootContainer>{this.props.children}</RootContainer>
    }
}