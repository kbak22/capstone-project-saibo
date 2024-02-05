module.exports = function override(config, env) {
    // Add a fallback for the node.js core modules:
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      // Your specific fallbacks:
      stream: require.resolve('stream-browserify'),
      // Add other fallbacks here as needed
      assert: require.resolve('assert/'),

      http: require.resolve('stream-http'),

      https: require.resolve('stream-browserify'),

      zlib: require.resolve('browserify-zlib'),
    };

    
  
    // Important: return the modified config
    return config;
  };
  