/**
 * Color Swatch Component JavaScript
 * Handles color mapping and interactions for color swatches
 */

// Initialize color swatches
function initializeColorSwatches() {
  document.querySelectorAll('.color-swatch-custom').forEach((swatch) => {
    const color = swatch.dataset.color;
    if (window.ColorMap && window.ColorMap[color]) {
      swatch.style.backgroundColor = window.ColorMap[color];
    }
  });
}

// Initialize product cell interactions
function initializeProductCellInteractions() {
  const productCells = document.querySelectorAll('.product-cell');

  productCells.forEach((cell) => {
    cell.addEventListener('click', function (e) {
      // Don't navigate if clicking on a color swatch (let the swatch handle navigation)
      if (e.target.closest('.color-swatch-custom')) {
        return;
      }

      const productHandle = this.dataset.productHandle;
      if (productHandle) {
        window.location.href = `/products/${productHandle}`;
      }
    });

    // Add hover event to trigger color swatch animations
    const colorSwatchContainers = cell.querySelectorAll('.color-swatch-container');

    cell.addEventListener('mouseenter', function () {
      // Reset animations
      colorSwatchContainers.forEach((container) => {
        container.style.animation = 'none';
        container.offsetHeight; // Trigger reflow
        container.style.animation = null;
      });
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  initializeColorSwatches();
  initializeProductCellInteractions();
});

// Export functions for manual initialization if needed
window.ColorSwatchComponent = {
  initializeColorSwatches,
  initializeProductCellInteractions
};