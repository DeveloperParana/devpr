import { postImage } from './post-image';
import type { Post } from '../types/post';

const postResume = (props: Post) => {
  const { url, data } = props;

  return `
    <article>
      <a href="${url}">
        <h3>${data.title}</h3>
      </a>
      ${data.image ? postImage(props) : ''}
      <p>${data.resume}</p>
    </article>
  `;
};

export { postResume };
