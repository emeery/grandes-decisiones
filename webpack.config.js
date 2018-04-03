// entrada - salida
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => { 
    const esProduccion = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log('env', env);
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        resolve: {
            modules: [
                'node_modules',
                path.resolve(__dirname + '/src')
            ],
            alias: {
                src: path.resolve(__dirname + '/src')
            }
        },
        module: {
            rules: [{
                loader:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: esProduccion ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};

