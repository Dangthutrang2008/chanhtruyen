import { stories } from './src-stories.js';

const listEl = document.getElementById('story-list');
stories.forEach(story => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="truyen/${story.slug}/index.html">${story.title}</a><br><small>${story.description}</small>`;
  listEl.appendChild(li);
});
