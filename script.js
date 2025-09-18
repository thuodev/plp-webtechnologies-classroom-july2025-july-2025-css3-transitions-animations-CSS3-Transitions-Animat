/* 
 Part 2: JavaScript Functions
 Demonstrating parameters, return values, and scope
*/

// Global variable to keep animation state
let isAnimated = false;

/**
 * Toggle animation class on an element
 * @param {HTMLElement} element - The element to animate
 * @param {string} className - The class that triggers animation
 */
function toggleAnimation(element, className) {
  if (!element) return; // Guard clause
  element.classList.toggle(className);
  isAnimated = !isAnimated;
  return isAnimated; // Return the new state
}

/**
 * Reset animation by removing class
 * @param {HTMLElement} element - The element to reset
 * @param {string} className - Class to remove
 */
function resetAnimation(element, className) {
  element.classList.remove(className);
  isAnimated = false;
}

// Part 3: Combine CSS + JS
const box = document.getElementById("animatedBox");
const triggerBtn = document.getElementById("triggerBtn");
const resetBtn = document.getElementById("resetBtn");

// Event listeners for buttons
triggerBtn.addEventListener("click", () => {
  const newState = toggleAnimation(box, "animate");
  console.log(`Animation state is now: ${newState ? "ON" : "OFF"}`);
});

resetBtn.addEventListener("click", () => {
  resetAnimation(box, "animate");
  console.log("Animation reset.");
});
