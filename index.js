module.exports = {
  rules: {
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    // improves git experience – one does not mark lines as changed by adding trailing commas
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'eol-last': ['warn', 'always'],
    'indent': ['warn', 2],
    'multiline-ternary': ['warn', 'always-multiline'],
    'no-console': ['error', {
      allow: ['warn', 'error'],
    }],
    'object-curly-newline': ['warn', {
      'ImportDeclaration': {
        multiline: true,
        minProperties: 4,
      },
      'ExportDeclaration': 'always',
    }],
    'object-curly-spacing': ['warn', 'always'],
    'operator-linebreak': ['warn', 'before'],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],

    'eslint-comments/require-description': ['error'],

    'import/order': ['warn', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],

    'react/jsx-curly-spacing': ['warn', {
      when: 'never',
      children: true,
    }],
    'react/jsx-indent': ['warn', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],

    '@typescript-eslint/naming-convention': ['warn',
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],
  },
}
