import webpack from 'webpack';
import path from 'path';
import OfflinePlugin from 'offline-plugin';
import ManifestPlugin from 'webpack-pwa-manifest'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
const config: webpack.Configuration =  {
    entry:{"app" :"./src/app.tsx"},
    output: {
        path :  path.resolve(__dirname,"_dist_"),
        filename:"js/[name].js",
        publicPath: '/'
    },
    mode:'development',
    resolve: {
        extensions: ['.ts', '.js','.tsx',".css",".png",".jpg",".json"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/app.html",
            chunks:["app"]
        }),
        new CopyPlugin([
            {from:"./src/assets/copy-to-root",to:"."}
        ]),
        
        new ManifestPlugin({
            fingerprints:false,
            name: '慕秋',
            short_name: '慕秋',
            description: '多功能PWA',
            background_color: '#3C8CE7',
            theme_color: "#3C8CE7",
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
            {
                src: path.resolve('./src/assets/leaf.png'),
                sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
            }]
        }),
        new webpack.DefinePlugin({
            "__COMPILED_DATE":JSON.stringify(new Date())
        }),
        new OfflinePlugin({Caches:"all"}),
    ],
    externals:{
        'antd':'antd',
        'react':'React',
        'react-dom':"ReactDOM",
        'react-router':"ReactRouter",
        'react-router-dom':"ReactRouterDOM",
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