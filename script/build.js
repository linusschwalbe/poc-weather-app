
require('dotenv').config({ silent: true });

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'app/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      extensions: [ '.js', '.jsx' ],
      preferBuiltins: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    globals(),
    builtins(),
    commonjs({
      namedExports: {
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement']
      }
    }),
    uglify()
  ]
}
