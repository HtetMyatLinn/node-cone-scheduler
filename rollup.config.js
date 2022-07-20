// Rollup plugins
import uglify from "rollup-plugin-uglify";

export default {
  input: "index.js",
  output: {
    file: "build/bundle.min.js",
    sourcemap: true,
    format: "cjs",
  },
  plugins: [uglify.uglify()],
};
