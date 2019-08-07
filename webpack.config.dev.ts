import webpack from 'webpack';
import path from 'path';
import OfflinePlugin from 'offline-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin'
const config: webpack.Configuration =  {
    entry:{"__INDEX_ENTRY__" :"./src/app.tsx","__INDEX_404__" :"./src/404.tsx"},
    output: {
        path :  path.resolve(__dirname,"_dist_"),
        filename:"js/[name].js",
        publicPath: '/'
    },
    mode:'development',
    resolve: {
        alias:{
            pinfo: path.resolve( __dirname,"info.js"),
            pagescanner: path.resolve( __dirname,'tools', 'src', 'pages-scanner.ts')
            // "tsx-loader": path.resolve(__dirname, "src","common","tsx-loader")
        },
        extensions: ['.ts', '.js','.tsx',".css",".png",".jpg",".ejs",".json",".pug"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/app.html",
            chunks:["__INDEX_ENTRY__"]
        }),
        new HtmlWebpackPlugin({
            filename:"404.html",
            template:"./src/404.html",
            chunks:["__INDEX_404__"]
        })
    ],
    externals:{
        'antd':'antd',
        // 'react':'React',
        // 'react-dom':"ReactDOM",
        // 'react-router':"react-router",
        // 'react-router-dom':"react-router-dom",
        'valine':'Valine',
        'leancloud-storage':'AV',
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