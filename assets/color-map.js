/**
 * Centralized Color Map
 * Source of truth for all color values used throughout the theme
 */

window.ColorMap = {
  'Mountain Mist': '#6A7E8D',
  'Midnight': '#101820',
  'Mint': '#B4C8C2',
  'Tangerine': '#FF8A00',
  'White': '#ffffff',
  'Slate': '#ffffff'
};

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.ColorMap;
}