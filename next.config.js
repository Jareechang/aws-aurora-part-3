const path = require('path');

const rootDir = process.cwd();

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.sql/,
      use: 'raw-loader',
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(rootDir, './src'),
    };

    return config
  },
}
