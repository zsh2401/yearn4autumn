import React from 'react';
import {StdLayout} from "../../controls/layout"
import * as fm from '../../common/fpage-manager'
export default class FStore extends React.Component{
    render(){
        return (
            <StdLayout>
                <p>{JSON.stringify(fm.getAll())}</p>
            </StdLayout>);
    }
}