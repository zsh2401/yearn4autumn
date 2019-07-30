import webpack from 'webpack';
import path from 'path';
import * as buildv2 from "./src/common/buildV2";
import DirectoriesMap from './src/common/directories-map';

const dirsMap = new DirectoriesMap(__dirname);
const helper:buildv2.BuildHelper = new buildv2.BuildHelper(dirsMap);
helper.load();
const plugins = helper.PagePlugins
const entry = helper.Entry;

entry["site"] = path.resolve(dirsMap.commonDir,"site");

plugins[plugins.length] = new webpack.DefinePlugin({
    '__projRootDir':JSON.stringify(__dirname)
});

const config: webpack.Configuration =  {
    entry:entry,
    output: {
        path : dirsMap.outputDir,
        filename:"js/[name].js",
        publicPath: '/'
    },
    mode:'production',
    resolve: {
        alias:{
            pinfo: path.resolve( __dirname,"info.js"),
            hejs: path.resolve( __dirname,'src', 'common', 'hejs'),
            hpug: path.resolve( __dirname,'src', 'common', 'hpug'),
            pagescanner: path.resolve( __dirname,'tools', 'src', 'pages-scanner.ts'),
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
            },
            { test: /CNAME$/, use: 'file-loader?name=/CNAME' },
            { test: /\.pug$/, loader: 'pug-loader' },
            // { test: /\.ejs$/, loader: 'ejs-loader' },
            // { test: /\.js|jsx$/, loader: 'babel-loader' },
        ]
      }
}
export default config;