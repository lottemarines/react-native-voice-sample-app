module.exports = function(api) {
  api.cache(true)
  const presets = [
    'babel-preset-expo',
    'module:metro-react-native-babel-preset'
  ]
  const plugins = [
    ["transform-inline-environment-variables", {
      "include": [
        "API_IP"
      ]
    }],
    [
    // NOTE: tsconfigで別途、設定する必要がある
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        extensions: [
          '.js',
          '.ios.js',
          '.android.js',
          '.ts',
          '.ios.ts',
          '.android.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
        ],
        alias: {
          component: './component',
          config: './config',
          utils: './utils',
          data: './data',
          modal: './modal',
          src: './src',
          constants: './constants',
          endpoints: './endpoints',
          constants: './constants',
          "react-native-vector-icons": "@expo/vector-icons",
        }
      }
    ]
  ]
  return {
    presets,
    plugins
  }
}
