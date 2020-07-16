import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import clear from 'rollup-plugin-clear';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

const external = ['react', 'prop-types']; // 不打包在内
const outputTypes = [
  {
    file: './dist/index.esm.js',
    format: 'es'
  },
  {
    file: './dist/index.js',
    format: 'cjs'
  }
];

const tasks = outputTypes.map((output) => ({
  input: './src/index.js', //(组件主入口，相对路径)
  external,
  output,
  plugins: [
    clear({
      targets: ['./dist']
    }),
    resolve(), // https://www.jianshu.com/p/48c41361bcbb 搜寻外部依赖, 并打包
    filesize(),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}));

export default tasks;