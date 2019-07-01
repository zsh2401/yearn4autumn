const data = require('./tools/dist/info-provider');
const info = require('./info');
data.init();
module.exports = {
    entry:data.getEntries(),
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
        extensions: ['.ts', '.js',".css",".png",".jpg" ]
    },
    plugins:data.getPlugins(),
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
            {test: /\.pug$/,
                use:[
                    {loader:'html-loader'},
                    {loader:'pug-html-loader',options:{data:data.getPugData()}},
                ]
            }
        ]
      }
}