module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react','@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            }
          },
          exclude: /node_modules/
        }
      ]
    },
  };
  