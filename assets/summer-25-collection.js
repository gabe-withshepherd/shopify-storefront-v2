/**
 * Color Swatch Component JavaScript
 * Handles global color mapping initialization for color swatches
 */

// Initialize color swatches globally
function initializeColorSwatches() {
  document.querySelectorAll('.color-swatch-custom').forEach((swatch) => {
    const color = swatch.dataset.color;
    if (window.ColorMap && window.ColorMap[color]) {
      swatch.style.backgroundColor = window.ColorMap[color];
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initializeColorSwatches();
});

// Export functions for manual initialization if needed
window.ColorSwatchComponent = {
  initializeColorSwatches
};