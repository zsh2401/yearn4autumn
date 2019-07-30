import React from 'react';
import {Button,ButtonGroup} from 'react-bootstrap';
export default class TitleScreen extends React.Component{
    render(){
        return (
        <div className="jumbotron header">
            <h1 className="text-center">慕秋</h1>
            <h5 className="text-center">yearn4autumn</h5>
            <p className="text-center">
            <br/>
            <ButtonGroup>
                <Button variant="success">开始使用</Button>
                <Button>浏览源代码</Button>
            </ButtonGroup>
            </p>
        </div>);
    }
}