const path = require('path') //resolve diferenças de caminho entre SO's linux/mac/win

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo inicial da aplicação
    output: { //arquivo que será gerado com webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: { //config de como serão lidados os arquivos
        rules: [
            {
                test: /\.jsx$/,//expressão regular verifica arquivos .jsx
                exclude: /node_mudules/,
                use: 'babel-loader', //integração entre babel e webpack
            }
        ]
    }
}