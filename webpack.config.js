module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  entry: './src/main.tsx',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.tsx$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.tsx',
    ],
  },
};
