const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [
                    SRC_PATH,
                ]
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                include: SRC_PATH
            },
            {
                test: /\.(le|c)ss$/,
                include: SRC_PATH,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }]
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        enforceExtension: false
    }
};
