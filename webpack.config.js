const { withExpo } = require('@expo/webpack-config');
 
module.exports = async function (env, argv) {
    const config = await withExpo(env, argv);
 
    config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
 
    return config;
};