import { postImage } from './post-image';
import type { Post } from '../types/post';

const postItem = (props: Pick<Post, 'url' | 'data'>) => {
  const { data, url } = props;
  return `
    <p>
      <a href="${url}">${data.title}</a>
      ${data.image ? postImage(props) : ''}
      <small>${data.resume}</small>
    </p>
  `;
};

export default postItem;
