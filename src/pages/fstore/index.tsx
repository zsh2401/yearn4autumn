import React from 'react';
import {AppLayout} from "../../controls"
import * as fm from '../../common/fpage-manager'
export default class FStore extends React.Component{
    render(){
        return (
            <AppLayout>
                <p>{JSON.stringify(fm.getAll())}</p>
            </AppLayout>);
    }
}