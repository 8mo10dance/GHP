module.exports = (api) => {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/typescript',
  ]

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'react-hot-loader/babel',
  ]

  return {
    presets,
    plugins,
  }
}
