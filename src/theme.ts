import { colors, semanticTokenColors } from './colors'
import { palette } from './palette'

const {
  blue400,
  gray200,
  gray400,
  green400,
  orange300,
  pink500,
  red500,
  violet400,
  yellow300,
} = palette

/**
 * Generates the theme
 *
 * @returns {unknown} The theme
 */
export function getTheme(): unknown {
  return {
    $schema: 'vscode://schemas/color-theme',
    name: 'Codegasm',
    type: 'dark',
    semanticHighlighting: true,
    semanticTokenColors,
    colors,
    tokenColors: [
      // Syntax
      ...[
        // comments
        [
          [
            'comment',
            // start and end of comment blocks
            'punctuation.definition.comment',
            // Diff files
            'source.diff',
          ],
          gray400,
        ],

        // functions
        [
          [
            'entity.name.function',
            'entity.name.function.member',
            'support.function',
            // Diff files
            'meta.diff.range',
            'punctuation.definition.range.diff',
          ],
          violet400,
        ],

        // import, export, return etc.
        [
          [
            'keyword',
            // css @ in @media queries
            'punctuation.definition.keyword',
            // this
            'variable.language',
            // Diff files
            'markup.deleted',
            'meta.diff.header.from-file',
            'punctuation.definition.deleted',
            'punctuation.definition.from-file.diff',
          ],
          red500,
        ],

        // primitives
        [
          [
            'constant',
            'support.constant',
          ],
          pink500,
        ],

        // const, var, class etc. and React JSX component tag
        [
          [
            'storage',
            // console and JSX custom components
            'support.class',
            // ReScript components
            'entity.name.namespace',
            // Diff files
            'meta.diff.header',
          ],
          blue400,
        ],

        // anything in quotes
        [
          [
            // inline code in markdown
            'markup.inline.raw.string',
            'string',
            // Diff files
            'markup.inserted',
            'punctuation.definition.inserted',
            'meta.diff.header.to-file',
            'punctuation.definition.to-file.diff',
          ],
          yellow300,
        ],

        // html tags and types
        [
          [
            'entity.name.section',
            'entity.name.tag',
            'entity.name.type',
            'support.type',
          ],
          green400,
        ],

        // variables
        [
          [
            // css property names
            'support.type.property-name',
            'support.variable',
            'variable',
          ],
          gray200,
        ],

        // Other
        [
          [
            'entity.other',
            // css . and # for CSS classes and IDs
            'punctuation.definition.entity',
            'support.other',
          ],
          orange300,
        ],

        [
          [
            'meta.brace',
            'punctuation',
          ],
          gray200,
        ],
      ].map(([scope, foreground]) => ({
        scope,
        settings: { foreground },
      })),

      // Font styles
      ...[
        // bold
        [
          [
            'markup.bold',
            'punctuation.definition.bold',
            // css ID
            'entity.other.attribute-name.id',
          ],
          'bold',
        ],

        // italic
        [
          [
            'comment',
            'markup.italic',
            'punctuation.definition.italic',
          ],
          'italic',
        ],
      ].map(([scope, style]) => ({
        name: style,
        scope,
        settings: { fontStyle: style },
      })),
    ],
  }
}
