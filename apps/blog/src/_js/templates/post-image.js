"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postImage = void 0;
const postImage = ({ data, url }) => {
    const { image, label = '' } = data;
    return url
        ? `
    <a href="${url}" aria-label="${label}">
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
exports.postImage = postImage;
//# sourceMappingURL=post-image.js.map