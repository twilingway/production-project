import path from 'path';
import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/config';

export function buildWebpackConfig(options: IBuildOptions): Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: 'auto',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
