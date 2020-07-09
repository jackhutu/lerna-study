import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import sass from 'rollup-plugin-sass';
import svg from 'rollup-plugin-react-svg';
import clear from 'rollup-plugin-clear';
import { writeFileSync } from 'fs';
import path from 'path';

const external = ['react', 'prop-types'];
const outputTypes = [
  {
    file: './dist/index.es.js',
    format: 'es'
  } //(ES Modules)
];

const tasks = outputTypes.map((output) => ({
  input: './src/index.js', //(组件主入口，相对路径)
  external,
  output,
  name: 'my-library',
  plugins: [
    clear({
      targets: ['./dist']
    }),
    resolve(),
    filesize(),
    sass({
      output: (styles) => writeFileSync(path.resolve('./dist', 'index.css'), styles),
      options: {
        importer(url) {
          return (
            url.startsWith('~') && {
              file: `${process.cwd()}/node_modules/${url.slice(1)}`
            }
          );
        }
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    svg()
  ]
}));

export default tasks;
