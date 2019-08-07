import webpack = require("webpack");
import * as bc from './'
export interface IBuildCore
{
    getEntry():webpack.Entry;
    getPlugins():Array<webpack.Plugin>;
    getAllFPageInfo():[];
    getCopies():bc.ICopyRecord[];
}