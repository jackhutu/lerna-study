import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import clear from 'rollup-plugin-clear';
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
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}));

export default tasks;


// for (const rollupConfig of rollupConfigs) {
//   if (opts.watch) {
//     const watcher = watch([
//       {
//         ...rollupConfig,
//         watch: {},
//       },
//     ]);
//     watcher.on('event', event => {
//       if (event.error) {
//         signale.error(event.error);
//       } else if (event.code === 'START') {
//         log(`[${type}] Rebuild since file changed`);
//       }
//     });
//     process.once('SIGINT', () => {
//       watcher.close();
//     });
//   } else {
//     const { output, ...input } = rollupConfig;
//     const bundle = await rollup(input); // eslint-disable-line
//     await bundle.write(output); // eslint-disable-line
//   }
// }