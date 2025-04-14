import { createElement } from '../../scripts/utils.js';

export default async function decorate(block) {
  const heroLine = createElement('div', { class: 'footer-line' });
  block.parentNode.append(heroLine);
}
