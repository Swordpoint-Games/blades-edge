const merge = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    open: true
  }
}

module.exports = merge(common, dev)
