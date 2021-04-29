module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// {
//   moduleName: '@env',
//     path: '.env',
//   blacklist: null,
//   whitelist: null,
//   safe: false,
//   allowUndefined: true,
// },
