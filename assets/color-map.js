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
  'Slate': '#708090'
};

window.ProductColorMap = {
  'airrail-6-performance-shorts-mountain-mist': 'Mountain Mist',
  'airrail-6-performance-shorts-mint': 'Mint',
  'airrail-6-performance-shorts-midnight': 'Midnight'
};

// Available colors for shorts products
window.ShortsColors = ['Mountain Mist', 'Mint', 'Midnight'];

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.ColorMap;
}