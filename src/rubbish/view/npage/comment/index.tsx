import React from 'react';
import ReactDOM from 'react-dom'
import {AppLayout,ValineComment} from '../../controls'
class App extends React.Component{
    render(){
        return <AppLayout>
            <h1>Comment Y4A.FUN!</h1>
            <ValineComment path="comment"></ValineComment>
        </AppLayout>
    }
}
ReactDOM.render(<App></App>,document.querySelector("#app"))