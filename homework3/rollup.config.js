import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from  '@rollup/plugin-terser'; 
import {nodeResolve} from '@rollup/plugin-node-resolve';
import polyfillNode from 'rollup-plugin-polyfill-node';

  export default {
    input: 'src/main.ts',
    output: {file: 'dist/bundle.js', 
      format: 'cjs'
    },
  plugins: [typescript(),terser(),commonjs(), nodeResolve({browser: true}), polyfillNode(), /* Other plugins */],};
