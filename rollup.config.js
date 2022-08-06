import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import font from "rollup-plugin-font";
import svgicons from "rollup-plugin-svg-icons";
import rollupPluginIconfont from "rollup-plugin-iconfont";
import path from "path";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.tsx",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            },
        ],
        plugins: [
            postcss({
                extract: false,
                extensions: [".scss"],
                use: "sass",
                // modules: true,
                // sourceMap: true,
                // inject: {
                //     insertAt: "top"
                // }
                // plugins: [
                //     autoprefixer()
                // ]
            }),
            peerDepsExternal(),
            resolve({
                extensions: [".js", ".ts"]
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            babel({
                exclude: "node_modules/**",
                extentions: [".js", ".ts"]
            }),
            // rollupPluginIconfont({
            //     svgs: 'src/core/fonts/icomoon.svg',
            //     fontsOutput: 'dist/fonts',
            //     cssOutput: 'dist/fonts/font.css',
            //     formats: ['ttf', 'woff2', 'woff', 'svg'],
            //     cssPrefix: 'nk__icon'
            // }),
            // svgicons({
            //     inputFolder: "src/core/fonts",
            //     extract: false
            // }),
            // font({
            //     svg: 'src/core/fonts/icomoon.svg',
            //     unicode: {
            //         include: 'src/core/fonts/icomoon.woff',
            //         prefix: "nk__icon"
            //     },
            //     extract: false,
            // })
            // font({
            //     "svg":"./src/core/fonts/icomoon.svg",
            //     "unicode":{
            //         "include":["src/core/fonts/icomoon.woff"],
            //         "prefix":"unicode-"
            //     },
            //     "css":{
            //         "include":["src/core/components/icon/icons.scss"],
            //         "prefix":"nk__icon",
            //     },
            // })
            // scss({
            //     processor: () => postcss([autoprefixer()]),
            //     includePaths: [
            //       path.join(__dirname, '../../node_modules/'),
            //       'node_modules/'
            //     ]
            // })
        ],
        external: ["react", "react-dom"]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.scss$/],   // ignore .scss file
    },
];
