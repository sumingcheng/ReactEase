module.exports = {
  env: {
    browser: true, // 表示代码将在浏览器环境中运行
    es2021: true, // 启用对 ES2021 语法的支持
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的规则
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐的规则
    'plugin:react/recommended', // 使用 React 推荐的规则
    'plugin:prettier/recommended', // 这是 Prettier 插件推荐的一组规则，它做两件事：首先，它启用 eslint-plugin-prettier，使 Prettier 作为 ESLint 的一个插件运行，其次，它使用 eslint-config-prettier 来关闭所有可能与 Prettier 冲突的 ESLint 规则。
  ],
  globals: {
    process: 'readonly',
    __dirname: 'readonly',
  },
  parser: '@typescript-eslint/parser', // 使用 @typescript-eslint/parser 解析器
  parserOptions: {
    ecmaVersion: 'latest', // 启用最新版本的 ECMAScript
    sourceType: 'module', // 使用模块化的代码
  },
  plugins: [
    '@typescript-eslint', // 使用 @typescript-eslint 插件
    'react', // 使用 React 插件
    'import', // 添加 import 插件
  ],
  rules: {
    indent: 'off',
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'max-len': ['error', 120],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',      // Node.js 内置模块
          'external',     // 第三方库，来自 node_modules 或其他外部源
          'internal',     // 项目内部模块，相对于项目根目录的路径
          'parent',       // 当前文件的父级目录中的模块
          'sibling',      // 同级目录中的模块
          'index',         // 当前目录下的 index.js 或 index.ts 文件
        ],
        'newlines-between': 'never',   // 不要求在不同类型模块间添加空行
        'alphabetize': {
          'order': 'ignore',   // 不强制模块按字母顺序排序
          'caseInsensitive': true, // 大小写不敏感
        },
      },
    ],
  },
}
