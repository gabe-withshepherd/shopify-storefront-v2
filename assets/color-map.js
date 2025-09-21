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

// Available colors for each product type
window.ProductTypeColors = {
  'short': ['Mountain Mist', 'Mint', 'Midnight'],
  'shirt': ['Mountain Mist', 'Mint', 'White', 'Midnight', 'Tangerine']
};

// Helper function to get product type from handle
window.getProductType = function(productHandle) {
  if (productHandle.includes('shorts') || productHandle.includes('short')) {
    return 'short';
  }
  if (productHandle.includes('tee') || productHandle.includes('shirt')) {
    return 'shirt';
  }
  return null;
};

// Helper function to get available colors for a product
window.getAvailableColors = function(productHandle) {
  const productType = window.getProductType(productHandle);
  return window.ProductTypeColors[productType] || [];
};

// Helper function to get base product handle (remove color suffix)
window.getBaseProductHandle = function(productHandle) {
  // Remove color suffixes to get base handle
  return productHandle
    .replace(/-mountain-mist$/, '')
    .replace(/-midnight$/, '')
    .replace(/-mint$/, '')
    .replace(/-white$/, '')
    .replace(/-tangerine$/, '')
    .replace(/-slate$/, '');
};

// Helper function to get current color from product handle
window.getCurrentColor = function(productHandle) {
  if (productHandle.endsWith('-mountain-mist')) return 'Mountain Mist';
  if (productHandle.endsWith('-midnight')) return 'Midnight';
  if (productHandle.endsWith('-mint')) return 'Mint';
  if (productHandle.endsWith('-white')) return 'White';
  if (productHandle.endsWith('-tangerine')) return 'Tangerine';
  if (productHandle.endsWith('-slate')) return 'Slate';
  return null;
};

// Helper function to generate product handle for specific color
window.getColorVariantHandle = function(productHandle, color) {
  const baseHandle = window.getBaseProductHandle(productHandle);
  const colorSuffix = color.toLowerCase().replace(/\s+/g, '-');
  return `${baseHandle}-${colorSuffix}`;
};

// Legacy support
window.ShortsColors = window.ProductTypeColors.short;
window.TeesColors = window.ProductTypeColors.shirt;

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.ColorMap;
}