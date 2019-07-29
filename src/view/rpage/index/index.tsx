import PlainApp from '../../controls/PlainApp';
import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from '../../controls/NavBar';
import Header from './Header';
import Notice from '../../controls/Notice';
import Footer from '../../controls/Footer';
import Container from '../../controls/Container';
import ValineComment from '../../controls/ValineComment';
require("./app.css");
class App extends React.Component{
    render(){
        return(
            <PlainApp>
                <NavBar></NavBar>
                <Header></Header>
                <Container>
                    <Notice></Notice>
                    <h1>Hello Index!</h1>
                    <ValineComment></ValineComment>
                    <Footer></Footer>
                </Container>
            </PlainApp>)
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))