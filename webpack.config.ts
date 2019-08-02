import webpack from 'webpack';
import path from 'path';
import BuildV2 from "./src/building/buildV2";
console.log(BuildV2);
import DirectoriesMap from './src/building/directories-map';
import CopyWebpackPlugin from 'copy-webpack-plugin'
const dirsMap = new DirectoriesMap(__dirname);
const helper:BuildV2.BuildHelper = new BuildV2.BuildHelper(dirsMap);
helper.load();
let plugins = helper.PagePlugins
let entry = helper.Entry;

entry["site"] = path.resolve(dirsMap.commonDir,"site");

plugins = plugins.concat([
    new webpack.DefinePlugin({
        '__PROJ_ROOT_DIR':JSON.stringify(__dirname),
        "__ALL_PAGE_DATA":JSON.stringify(helper.Cache),
        "__COMPILED_DATE":JSON.stringify(new Date)
    }),
    new CopyWebpackPlugin([
        {from:path.resolve(dirsMap.assestsDir,"root"),to:dirsMap.outputDir}
    ])
]);

const config: webpack.Configuration =  {
    entry:entry,
    output: {
        path : dirsMap.outputDir,
        filename:"js/[name].js",
        publicPath: '/'
    },
    mode:'production',
    resolveLoader: {
        modules: [
          'node_modules',
          path.resolve(__dirname, "src","common")
        ]
    },
    resolve: {
        alias:{
            pinfo: path.resolve( __dirname,"info.js"),
            hejs: path.resolve( __dirname,'src', 'common', 'hejs'),
            hpug: path.resolve( __dirname,'src', 'common', 'hpug'),
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