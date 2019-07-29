import React from 'react';
import Container from './Container';
import NavBar from './NavBar';
import Notice from './Notice';
import Footer from './Footer';
import RootContainer from './RootContainer';
export default class StdApp extends React.Component
{
    render(){
        return (
        <RootContainer>
            <NavBar></NavBar>
            <Container>
                <Notice></Notice>
                <div>{this.props.children}</div>
                <Footer></Footer>
            </Container>
        </RootContainer>)
    }
}