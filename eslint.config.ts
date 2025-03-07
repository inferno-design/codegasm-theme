import { config, GLOB_MARKDOWN } from '@inferno-design/eslint-config'

export default config(
  {
    type: 'app',
  },
  {
    files: [GLOB_MARKDOWN],
    rules: {
      'style/no-trailing-spaces': 'off',
    },
  },
  {
    rules: {
      'no-console': 'off',
      'perfectionist/sort-objects': 'off',
      'ts/no-unsafe-argument': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-call': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/strict-boolean-expressions': 'off',
    },
  },
  {
    ignores: [
      'tests/**/*',
      'themes/**/*',
    ],
  },
)
