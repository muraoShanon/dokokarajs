/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "dokokara.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
