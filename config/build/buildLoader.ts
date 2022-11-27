import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { IBuildOptions } from './types/config';

export function buildLoaders(options: IBuildOptions): RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = buildBabelLoader(options);

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff|webp)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      // options: {
      //   transpileOnly: true,
      // },
    },
    exclude: /node_modules/,
  };
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
