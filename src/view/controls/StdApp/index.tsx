import React from 'react';
import Footer from './Footer';
import Container from '../Container';
import NavBar from './NavBar';
export default class StdApp extends React.Component{
    render(){
        return (<div>
            <NavBar></NavBar>
            <Container>
                {this.props.children}
                <Footer></Footer>
            </Container>
        </div>)
    }
}