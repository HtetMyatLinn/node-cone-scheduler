// Rollup plugins
import { terser } from "rollup-plugin-terser";
export default {
  input: "index.js",
  output: {
    file: "build/bundle.min.js",
    sourcemap: true,
    format: "cjs",
  },
  plugins: [terser()],
};
