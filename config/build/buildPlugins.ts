import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack, { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  paths,
}: IBuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
