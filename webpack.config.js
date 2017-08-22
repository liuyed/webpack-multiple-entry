var path = require('path'),
    Glob = require('glob'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),

    ExtractTextPlugin = require('extract-text-webpack-plugin'),

    IsDev = true,
    postCssConfig = require('./postcss.config.js'),

    ROOT = process.cwd(); //根目录



var configPlugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'lib'
    }),
    new ExtractTextPlugin({
        filename: 'css/common.css?v=[contenthash:8]',
        allChunks: true
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        layer: 'layer'
    })

];



var entryJs = getEntryJs('./src/js/**/*.js');
var entryHtml = getEntryHtml('./src/views/**/*.html');


/**
 * 获取入口js
 * 
 * @param {any} globpath 
 * @returns 
 */
function getEntryJs(globpath) {
    let entries = {};
    Glob.sync(globpath).forEach(function(entry) {


            //console.log(entry)
            var basename = path.basename(entry, path.extname(entry)),
                pathname = path.dirname(entry);
            //console.log(pathname)

            // js/lib/*.js 不作为入口
            if (!entry.match(/\/js\/lib\//)) {
                entries[pathname.split('/').splice(3).join('/') + '/' + basename] = pathname + '/' + basename;
            }



        })
        //console.log(entries)


    return entries;



}

function getEntryHtml(globpath) {
    let entries = [];

    Glob.sync(globpath).forEach(function(entry) {
        var basename = path.basename(entry, path.extname(entry)),
            pathname = path.dirname(entry);

        minifyConfig = IsDev ? '' : {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        };

        entries.push({
            filename: entry.split('/').splice(2).join('/'),
            template: entry,
            chunks: ['lib', pathname.split('/').splice(3).join('/') + '/' + basename],
            minify: minifyConfig,
            inject: 'head'
        });
    })

    console.log(entries);
    return entries;


}


// html
entryHtml.forEach(function(v) {
    configPlugins.push(new HtmlWebpackPlugin(v));
});

module.exports = {
    entry: entryJs,

    //devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist/views/')
    },
    plugins: configPlugins,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                // exclude:'./node_modules/',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/i,
            exclude: /node_modules/,
            use: {
                loader: 'url-loader',
                options: {
                    // path: path.resolve(__dirname, 'dist/img/'),

                    name: 'img/[name].[ext]?v=[hash:8]',
                    limit: 70
                }
            }
        }, {
            test: /\.(htm|html)$/i,
            exclude: /node_modules/,
            loader: "html-withimg-loader?min=false"
        }, {
            test: /\.scss$/i,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './postcss.config.js'
                        }
                    }
                }, 'sass-loader']
            })
        }]
    },

    output: {
        filename: 'js/[name].js?v=[chunkhash:8]',
        chunkFilename: 'js/[name].js?v=[chunkhash:8]',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
            //path:path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['*', '.js', '.json'],
        alias: {
            bg: path.resolve(__dirname, 'src/img/bg.jpg'),
            jquery: path.resolve(__dirname, 'src/lib/jquery/jquery-1.12.4.min.js'),
            layer: path.resolve(__dirname, 'src/lib/layer/app.js')
        }
    }
}