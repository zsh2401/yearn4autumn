import React, { ReactNode } from 'react';
import { IFunManifest } from '../../../common/buildV2/Manifest';
import {Card} from 'antd'
interface IFlistProps{
    funs:Array<IFunManifest>;
}
export default class FList extends React.Component<IFlistProps>{
    render():ReactNode{
        let cards = [];
        this.props.funs.forEach(fun=>{
            cards.push(<Card title={fun.ext_name}>{fun.desc}</Card>);
        })
        return <div>{cards}</div>
    }
}