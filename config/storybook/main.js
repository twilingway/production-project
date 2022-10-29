const glob = require('glob');
const path = require('path');

const appDirectory = path.resolve(__dirname, '../../');
const getStories = () =>
  glob.sync(`${appDirectory}/src/**/*.stories.@(js|jsx|ts|tsx)`, {
    ignore: `${appDirectory}/node_modules/**/*.*`,
  });

module.exports = {
  stories: [],
  // stories: async (list) => [...list, ...getStories()],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
