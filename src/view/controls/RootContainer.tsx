import React from 'react';
export default class RootContainer extends React.Component{
    render()
    {
        return <div>{this.props.children}</div>
    }
}