require("./app.css");
import React from 'react';
import ReactDOM from 'react-dom'
import ValineComment from '../../controls/ValineComment';
import PlainApp from '../../controls/PlainApp';
import Notice from '../../controls/Notice';
import TitleScreen from './TitlteScreen';
import NavBar from '../../controls/StdApp/NavBar';
import Footer from '../../controls/StdApp/Footer';
import SplitLine from '../../controls/StdApp/SplitLine';
class App extends React.Component{
    render(){
        return(
            <PlainApp>
                <NavBar></NavBar>
                <TitleScreen></TitleScreen>
                <div className="container">
                    <Notice></Notice>
                    <h1>Hello Index!</h1>
                    <ValineComment></ValineComment>
                </div>
                <SplitLine></SplitLine>
                <Footer></Footer>
            </PlainApp>)
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))