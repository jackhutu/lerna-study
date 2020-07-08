export default {
  target: 'node',
  cjs: { type: 'babel', lazy: true },
  esm: 'rollup',
  disableTypeCheck: true
  // browserFiles: [
  //   'src/createHistory.js',
  //   'src/dynamic.js',
  //   'src/link.js',
  //   'src/navlink.js',
  //   'src/prompt.js',
  //   'src/redirect.js',
  //   'src/renderRoutes.js',
  //   'src/Route.js',
  //   'src/router.js',
  //   'src/runtimePlugin.js',
  //   'src/utils.js',
  //   'src/withRouter.js',
  // ],
  // extraExternals: ['@tmp', 'react-router-dom', 'react'],
};