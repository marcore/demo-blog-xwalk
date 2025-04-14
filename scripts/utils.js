/**
 * Creates a new HTML element
 */
function createElement(tagName, attributes, ...children) {
  const el = document.createElement(tagName);
  if (attributes) {
    Object.keys(attributes).forEach((name) => {
      el.setAttribute(name, attributes[name]);
    });
  }
  children.forEach((child) => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (Array.isArray(child)) {
      child.forEach((c) => el.appendChild(c));
    } else if (child) {
      el.appendChild(child);
    }
  });
  return el;
}

/**
 * Adds a horizontal divider line at the end of an element
 * @param {HTMLElement} element - The element to add the divider line to
 */
function addDividerLine(element) {
  const hr = createElement('hr');
  const divider = createElement('div', { class: 'block-divider-line' }, hr);
  element.appendChild(divider);
}

export {
  createElement,
  addDividerLine,
};
