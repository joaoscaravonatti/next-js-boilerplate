module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}