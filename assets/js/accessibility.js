/**
 * "Imkoniyatlar Kengligi" — Accessibility Engine Alias Wrapper
 */

if (!window.Accessibility && window.AccessibilityEngine) {
  window.Accessibility = new window.AccessibilityEngine();
  window.a11y = window.Accessibility;
}
