import webpack from 'webpack';
import path from 'path';
import * as info from './src/common/build/infox';
import * as build from "./src/common/build";
const config: webpack.Configuration =  {
    entry:build.getEntry(),
    output: {
        path : info.outputDir,
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
    plugins:build.getPlugins(),
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