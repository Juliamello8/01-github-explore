const path = require('path'); //resolve diferenças de caminho entre SO's linux/mac/win
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo inicial da aplicação
    output: { //arquivo que será gerado com webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(), // && pode ser usado como if sem o else
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),

    ].filter(Boolean),
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
    },
    module: { //config de como serão lidados os arquivos
        rules: [
            {
                test: /\.jsx$/,//expressão regular verifica arquivos .jsx
                exclude: /node_mudules/,
                use: {
                    loader: 'babel-loader',//integração entre babel e webpack
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_mudules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
}