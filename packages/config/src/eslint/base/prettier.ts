import prettierConfig from 'eslint-config-prettier'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import { config, type ConfigArray } from 'typescript-eslint'

export const prettier: ConfigArray = config([
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
          printWidth: 80,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
      ],
    },
  },
  prettierConfig,
  prettierPluginRecommended,
])
