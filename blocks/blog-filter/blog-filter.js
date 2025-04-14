import { createElement } from '../../scripts/utils.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  const heading = block.children[0].children[0];
  if (heading) {
    heading.classList.add('title');
    const heTag = createElement('h3');
    heTag.textContent = heading.querySelector('p')?.textContent;
    heading.querySelector('p')?.replaceWith(heTag);
  }
  block.children[0].children[0].classList.add('title');
  const filterSection = block.children[1].children[0];
  if (filterSection) {
    filterSection.classList.add('filters');
    filterSection.prepend(createElement('button', { class: 'dropdown-button', 'data-selected': 'Blog Home' }));
    filterSection.querySelector('ul')?.classList.add('filters-list');

    const filters = [...filterSection.querySelectorAll('li')];
    filters.forEach((filter) => {
      const p = filter.querySelector('p');
      if (p) {
        p.replaceWith(...p.childNodes);
      }
    });
    heading.parentNode.append(filterSection);
  }
}
