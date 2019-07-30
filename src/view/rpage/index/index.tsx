require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom'
import Container from '../../controls/Container';
import ValineComment from '../../controls/ValineComment';
import PlainApp from '../../controls/PlainApp';
import Notice from '../../controls/Notice';
import TitleScreen from './TitlteScreen';
import NavBar from '../../controls/StdApp/NavBar';
import Footer from '../../controls/StdApp/Footer';
class App extends React.Component{
    render(){
        return(
            <PlainApp>
                <NavBar></NavBar>
                <TitleScreen></TitleScreen>
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