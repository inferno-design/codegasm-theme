import tinycolor from 'tinycolor2'

/**
 * Brighten a color
 *
 * @param {string} hex - The hex color to brighten
 * @param {number} percent - The percentage to brighten the color by
 *
 * @returns {string} The brightened hex color
 */
export function brighten(hex: string, percent: number): string {
  return tinycolor(hex).brighten(percent).toHex8String().toUpperCase()
}

/**
 * Darken a color
 *
 * @param {string} hex - The hex color to darken
 * @param {number} percent - The percentage to darken the color by
 *
 * @returns {string} The darkened hex color
 */
export function darken(hex: string, percent: number): string {
  return tinycolor(hex).darken(percent).toHex8String().toUpperCase()
}

/**
 * Desaturate a color
 *
 * @param {string} hex - The hex color to desaturate
 * @param {number} percent - The percentage to desaturate the color by
 *
 * @returns {string} The desaturated hex color
 */
export function desaturate(hex: string, percent: number): string {
  return tinycolor(hex).desaturate(percent).toHex8String().toUpperCase()
}

/**
 * Set the alpha value of a color
 *
 * @param {string} hex - The hex color to set the alpha value of
 * @param {number} alpha - The alpha value to set the color to
 *
 * @returns {string} The hex color with the alpha value set
 */
export function setAlpha(hex: string, alpha: number): string {
  return tinycolor(hex).setAlpha(alpha).toHex8String().toUpperCase()
}
