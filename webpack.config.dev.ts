import webpack from 'webpack';
import path from 'path';
import * as bc from "./build/core";
import DirectoriesMap from './build/directories-map';
import CopyWebpackPlugin from 'copy-webpack-plugin'
const dirsMap = new DirectoriesMap(__dirname);
bc.loadDirsMap(dirsMap);
const helper:bc.IBuildCore = bc.createBuildCore();
let plugins = helper.getPlugins();
let entry = helper.getEntry();

entry["site"] = path.resolve(dirsMap.commonDir,"site");

plugins = plugins.concat([
    new webpack.DefinePlugin({
        '__PROJ_ROOT_DIR':JSON.stringify(__dirname),
        "__ALL_FUN_PAGE_DATA":JSON.stringify(helper.getAllFPageInfo()),
        "__COMPILED_DATE":JSON.stringify(new Date)
    }),
    new CopyWebpackPlugin([
        {from:path.resolve(dirsMap.assestsDir,"root"),to:dirsMap.outputDir},
        {from:path.resolve(dirsMap.assestsDir,"f_icons"),to:path.resolve(dirsMap.outputDir,"images/f_icons/")}
    ])
]);

const config: webpack.Configuration =  {
    entry:entry,
    output: {
        path : dirsMap.outputDir,
        filename:"js/[name].js",
        publicPath: '/'
    },
    mode:'development',
    resolveLoader: {
        modules: [
          'node_modules',
          path.resolve(__dirname, "src","common")
        ]
    },
    resolve: {
        alias:{
            pinfo: path.resolve( __dirname,"info.js"),
            pagescanner: path.resolve( __dirname,'tools', 'src', 'pages-scanner.ts')
            // "tsx-loader": path.resolve(__dirname, "src","common","tsx-loader")
        },
        extensions: ['.ts', '.js','.tsx',".css",".png",".jpg",".ejs",".json",".pug"]
    },
    plugins:plugins,
    externals:{
        'antd':'antd',
        'react':'React',
        'react-dom':"ReactDOM",
        'valine':'Valine',
        'leancloud-storage':'AV',
        // "react-bootstrap":"RBS"
    },
    module: {
        rules: [
            { test: /\.css$/, use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }
                ] 
            },
            { test: /\.ts(x?)$/, use: 'ts-loader' },
            { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/, 
                use: {
                        loader:'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
                }
            },
            { test: /\.(nes|gba)?$/, 
                use: {
                        loader:'url-loader?name=assests/rom/[name].[ext]'
                }
            }
        ]
      }
}
export default config;