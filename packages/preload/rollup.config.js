import { builtinModules } from "module";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";

const plugins = () => [
  json(),
  typescript({ tsconfig: "./tsconfig.json" }),
  commonjs(),
  resolve({
    preferBuiltins: true,
  }),
];

const external = [
  ...builtinModules,
  "electron",
  "electron-updater",
  "builder-util-runtime",
];

/** @type {import('rollup').RollupOptions[]} */
const config = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "../../preload/index.js",
        exports: "auto",
        format: "commonjs",
        sourcemap: false,
      },
    ],
    external,
    plugins: plugins(),
  },
];

export default config;
