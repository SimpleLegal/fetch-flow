import babel from "rollup-plugin-babel";

export default {
  entry: "src/index.js",
  targets: [{ dest: "dist/bundle.js", format: "cjs" }],
  plugins: [
    babel({
      exclude: ["node_modules/**"],
      plugins: ["transform-decorators-legacy", "transform-class-properties"],
      presets: [
        ["es2015", { "modules": false }],
        "react",
        "stage-0"
      ]
    })
  ]
};
