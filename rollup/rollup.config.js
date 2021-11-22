import { babel } from '@rollup/plugin-babel';
import image from 'rollup-plugin-img';
import styles from "rollup-plugin-styles";
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    image({ limit: 100000 }),
    styles(),
    serve({
      open: true,
      contentBase: '',
      port: 3310,
    }),
    livereload()
  ]
};