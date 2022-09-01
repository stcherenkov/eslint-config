module.exports = {
  rules: {
    'arrow-parens': ['warn', 'always'],
    // improves git experience – one does not mark lines as changed by adding trailing commas
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'object-curly-spacing': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],

    'import/order': ['warn', {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
    }],
  },
}
