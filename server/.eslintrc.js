module.exports = {
  root: true,
  env: {
    es2020: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2021,
    createDefaultProgram: true,
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  settings: {
    noInlineConfig: true,
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    node: {
      allowModules: ['electron'],
      resolvePaths: ['./'],
      tryExtensions: ['.js', '.ts'],
    },
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'max-len': ['warn', { code: 80 }],
    'import/extensions': 'off',
    'linebreak-style': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'no-underscore-dangle': 'off',
    'tsdoc/syntax': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    'lines-between-class-members': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  ignorePatterns: ['.eslintrc.js'],
};
