module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: './bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: { loader: 'ts-loader' } },

      { enforce: "pre", test: /|.js$/, exclude: /node_modules/, loader: 'source-map-loader'}
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  devtool: 'source-map'
}
