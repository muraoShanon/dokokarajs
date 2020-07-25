module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "dokokara.js",
    library: "dokokara",
    libraryExport: "",
    libraryTarget: "global",
    globalObject: "this",
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
