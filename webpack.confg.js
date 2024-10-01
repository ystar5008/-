const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 또는 'production'
    entry: './dist/contents.js', // 진입점 파일
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new Dotenv(),
        new webpack.DefinePlugin({
            'process.env.API_URL': JSON.stringify(process.env.API_URL), // 환경 변수 추가
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Babel을 사용하여 ES6+ 코드를 변환 (필요 시)
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
