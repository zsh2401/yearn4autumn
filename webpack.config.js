const info = require('./tools/dist/infox');
const pluginsManager = require('./tools/dist/plugins-manager');
const enritesManager = require('./tools/dist/entries-manager');
const path = require('path');
module.exports = {
    entry:enritesManager.getEntries(),
    output: {
        path : info.outputDir,
        filename:"js/[name].js",
        publicPath: '/'
    },
    mode:'production',
    devServer:{
        contentBase:info.outputDir,
        historyApiFallback:true,
        inline:true,
        port:9999
    },
    resolve: {
        alias:{
            pinfo: path.resolve( __dirname,"info.js"),
            hejs: path.resolve( __dirname,'src', 'common', 'hejs'),
            hpug: path.resolve( __dirname,'src', 'common', 'hpug'),
        },
        extensions: ['.ts', '.js',".css",".png",".jpg",".ejs",".json",".pug"]
    },
    plugins:pluginsManager.getPlugins(),
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
                        loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
                }
            },
            { test: /\.nes?$/, 
                use: {
                        loader:'url-loader?limit=1&name=assests/nes/[name].nes'
                }
            },
            // {test: /\.pug$/,
            //     use:[
            //         {loader:'html-loader'},
            //         {loader:'pug-html-loader'},
            //     ]
            // },
            { test: /\.pug$/, loader: 'pug-loader' },
            { test: /\.ejs$/, loader: 'ejs-loader' },
        ]
      }
}