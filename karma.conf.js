module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: ['test/**/*.js'],
    reporters: ['spec'],
    preprocessors: {
      'test/*.js': ['webpack']
    },
    singleRun: true,

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          },
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    }
  });
};