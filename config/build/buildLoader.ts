import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
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
