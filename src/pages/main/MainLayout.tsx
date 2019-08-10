import React from 'react';
import Container from '@material-ui/core/Container'
import { CSSProperties } from '@material-ui/styles';
import { BottomNavBar } from './BottomNavBar';
import MainPage from '.';
export interface MdLayoutProps{
    main:MainPage;
}
export class MdLayout extends React.Component{
    private readonly outerStyle :CSSProperties = {
        height:'100%',
        display: 'flex',
        flexDirection: "column"
    }
    private readonly scrollViewStyle:CSSProperties = {
        overflowY:"auto",
        width:"100%",
        height:"80vh",
        flex:"1 0 auto",
    }
    private readonly bottomNavBarStyle:CSSProperties = {
        flex:"0 0 auto"
    }
    render(){
        return (
        <div style={this.outerStyle}>
            <div style={this.scrollViewStyle}>
                <Container maxWidth="sm">
                    {this.props.children}
                </Container>
            </div>
            <div style={this.bottomNavBarStyle}>
                <BottomNavBar></BottomNavBar>
            </div>
        </div>)
    }
}