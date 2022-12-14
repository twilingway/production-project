export function buildFileLoader() {
  return {
    test: /\.(png|jpe?g|gif|woff2|woff|webp)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  };
}
