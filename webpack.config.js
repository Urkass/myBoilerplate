const path = require('path');

module.exports = (env, { mode }) => {
  const isProd = mode === 'production';
  return {
    mode,
    entry: './src/index.jsx',
    devtool: isProd && 'source-map',
    performance: { hints: false },
    devServer: {
      // contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8200,
      publicPath: `/dist/`,
      overlay: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.p?css$/,
          use: [
            { loader: 'style-loader', options: { singleton: true } },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: isProd
                  ? '[hash:base64:6]'
                  : '[path][name]---[local]',
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        },
        { test: /\.svg$/, use: 'svg-react-loader' },
      ],
    },
    resolve: { extensions: ['.jsx', '.js'] },
    output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') },
  };
  // minimize: true,
};
