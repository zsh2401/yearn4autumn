import webpack from 'webpack';
import path from 'path';
import * as build from "./src/common/build";
import { DirectoriesMap } from './src/common/build/DirectoriesMap';
import PagesScanner from './src/common/build/PageScanner';

const scanner = new PagesScanner();
const dirsMap = new DirectoriesMap(__dirname);

const plugins = build.getPlugins(scanner);
const entry = build.getEntry(scanner);

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
        extensions: ['.ts', '.js',".css",".png",".jpg",".ejs",".json",".pug"]
    },
    plugins:plugins,
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
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/, 
                use: {
                        loader:'url-loader?limit=1&name=images/[name].[ext]'
                }
            },
            { test: /\.nes?$/, 
                use: {
                        loader:'url-loader?limit=1&name=assests/nes/[name].nes'
                }
            },
            { test: /\.pug$/, loader: 'pug-loader' },
            { test: /\.ejs$/, loader: 'ejs-loader' },
        ]
      }
}
export default config;