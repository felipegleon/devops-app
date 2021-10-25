const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            $ENV: {
                BACKEND_SERVER : JSON.stringify(process.env.BACKEND_SERVER)
            }
        })
    ]
};