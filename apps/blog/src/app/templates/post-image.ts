import { Post } from '../types/post';

export const postImage = ({ data, url }: Pick<Post, 'url' | 'data'>) => {
  const { image, label = '' } = data;
  return url
    ? `
    <a href="${data.baseUrl + url}" aria-label="${label}">
      <figure>
        <img src="${image}" alt="${label}">
      </figure>
    </a>
      `
    : `
    <figure>
      <img src="${image}" alt="${label}">
    </figure>
      `;
};
