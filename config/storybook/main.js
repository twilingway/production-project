const glob = require('glob');
const path = require('path');

const appDirectory = path.resolve(__dirname, '../../');
console.log('appDirectory', appDirectory);
const getStories = () =>
  glob.sync(`${appDirectory}/src/**/*.stories.@(js|jsx|ts|tsx)`, {
    ignore: `${appDirectory}/src/**/*.*`,
  });

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // stories: async (list) => [...list, ...getStories()],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
