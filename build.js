// esbuild configuration
// use nodejs and run this file to build the web components
const { buildSync } = require("esbuild");

buildSync({
    entryPoints: ["./app.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "output/bundle.js",
  });
