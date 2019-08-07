import * as bc from './'
import { IDirectoriesMap } from '../directories-map';
import load from '../libloader';
import webpack = require('webpack');
import { ICopyRecord } from './ICopyRecord';
import { PagesScannerImpl } from './PagesScannerImpl';
export default class BuildCore implements bc.IBuildCore{
    private handlers:Array<bc.PageHandler>;
    private pagesScanner:bc.IPagesScanner;
    constructor(){
        this.pagesScanner = new PagesScannerImpl();
        this.load();
    }
    private load(){
        this.handlers = [];
        let that = this;
        this.pagesScanner.scan().forEach(dir=>{
            that.handlers.push(new bc.PageHandler(dir));
        });
    }
    getAllFPageInfo():[]{
        return [];
    }
    getPlugins():Array<webpack.Plugin>{
        let result:Array<webpack.Plugin>  = new Array<webpack.Plugin>();
        this.handlers.forEach(handler=>{
            result = result.concat(handler.plugins);
        })
        return result;
    }
    getCopies():Array<ICopyRecord> {
        let result  = new Array<ICopyRecord>();
        this.handlers.forEach(handler=>{
            result = result.concat(handler.copies);
        })
        return result;
    }
    getEntry():webpack.Entry{
        let result = {};
        this.handlers.forEach(handler=>{
            let hentry = handler.entry;
            for(let key in hentry){
                result[key] = hentry[key];
            }
        })
        return result;
    }
}