const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: {
          loader: `ts-loader`
        },
      },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, ``, `json`]
  },
  devtool: `source-map`,
};
