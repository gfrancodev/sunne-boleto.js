const path = require('path');

module.exports = {
  entry: './src/sunne-boleto.js',
  mode: 'development',
  optimization: {
    minimizer: [],
  },
  output: {
    filename: 'boleto.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'Boleto',
  },
};
