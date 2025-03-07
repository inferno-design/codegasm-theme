import { promises as fs } from 'node:fs'
import process from 'node:process'
import prettier from 'prettier'

import { getTheme } from './theme'

/**
 * Generates the theme
 *
 * @returns {Promise<void>} The theme
 */
async function main(): Promise<void> {
  console.log('Generating theme...')

  try {
    await Promise.all([
      fs.mkdir('./themes', { recursive: true }),
      fs.writeFile('./themes/codegasm.json', await prettify(getTheme())),
    ])
  } catch (error) {
    console.error('Failed to generate theme:', error)
    process.exit(1)
  }

  console.log('Finished generating theme!')
}

/**
 * Prettifies a JSON object
 *
 * @param {unknown} object - The object to prettify
 *
 * @returns {Promise<string>} The prettified object
 */
async function prettify(object: unknown): Promise<string> {
  return prettier.format(JSON.stringify(object, undefined, 2), {
    parser: 'json',
  })
}

void main()
