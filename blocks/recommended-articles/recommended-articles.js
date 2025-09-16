import { createElement } from '../../scripts/utils.js';

export default function decorate(block) {
  /* const title = block.classList.contains('title');
  if (title) {
    block.children[0].classList.add('title');
  } */
  const heading = block.querySelector('h3');
  if (heading) {
    const divTitle = createElement('div', { class: 'title' });
    const titleP = createElement('p');
    titleP.textContent = heading.textContent;
    divTitle.append(titleP);
    heading.replaceWith(divTitle);

    // block.prepend(divTitle);
  }
  /* eslint-disable-next-line no-plusplus */
  for (let i = 1; i < block.children.length; i++) {
    const article = block.children[i];
    if (!article.classList.contains('title')) {
      const numberDiv = createElement('h3', { class: 'article-box-number' });
      numberDiv.textContent = (heading) ? `${i}` : `${i + 1}`;
      article.prepend(numberDiv);
    }
    const cat = article.querySelector('h6');
    if (cat) {
      cat.classList.add(cat.textContent.replace(/ /g, '-').toLowerCase());
      cat.textContent = '';
    }
  }
  block.querySelectorAll('a').forEach((link) => {
    link.classList.remove('button');
  });
}
