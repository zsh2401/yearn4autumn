import React from 'react';
export default class Container extends React.Component{
    render()
    {
        return <div id="main-container" className="container">{this.props.children}</div>
    }
}