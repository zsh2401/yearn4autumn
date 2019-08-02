import React from 'react';
import ReactDOM from 'react-dom'
import {AppLayout,ValineComment} from '../../controls'
class App extends React.Component{
    render(){
        return <AppLayout>
            <h1>f store!</h1>
        </AppLayout>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))