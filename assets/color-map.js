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
  'airrail-6-performance-shorts-midnight': 'Midnight',
  'tracefiber-performance-tech-tee-white': 'White',
  'tracefiber-performance-tech-tee-mint': 'Mint',
  'tracefiber-performance-tech-tee-midnight': 'Midnight',
  'tracefiber-performance-tech-tee-tangerine': 'Tangerine',
  'tracefiber-performance-tech-tee-mountain-mist': 'Mountain Mist'
};

// Available colors for shorts products
window.ShortsColors = ['Mountain Mist', 'Mint', 'Midnight'];
window.TeesColors = ['White', 'Mint', 'Midnight', 'Tangerine', 'Mountain Mist'];

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.ColorMap;
}