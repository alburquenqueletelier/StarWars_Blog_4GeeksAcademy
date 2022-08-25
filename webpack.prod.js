const {merge} = require('webpack-merge');
const Common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
module.exports = merge(Common, {
    mode: 'production',
    output: {
        publicPath: './'
    },
    plugins: [
        new Dotenv({
            safe: true,
            systemvars: true
        })
    ]
});
