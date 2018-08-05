let path = require('path');

let conf = {
    entry: './src/javascript/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js",
        publicPath: "dist/"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {

            }
        ]
    },

};

module.exports = conf;