// npm install --save-dev assert https-browserify os-browserify stream-browserify stream-http react-app-rewired buffer process

// Within package.json change the scripts field for start, build and test. Instead of react-scripts replace it with react-app-rewired
//   "scripts": {
//     "start": "react-app-rewired start",
//     "build": "react-app-rewired build",
//     "test": "react-app-rewired test",
//     "eject": "react-app-rewired eject"
//   },

const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}