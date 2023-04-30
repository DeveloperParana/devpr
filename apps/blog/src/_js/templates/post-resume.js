"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResume = void 0;
const post_image_1 = require("./post-image");
const postResume = (props) => {
    const { url, data } = props;
    return `
    <article>
      <a href="${url}">
        <h3>${data.title}</h3>
      </a>
      ${data.image ? (0, post_image_1.postImage)(props) : ''}
      <p>${data.resume}</p>
    </article>
  `;
};
exports.postResume = postResume;
//# sourceMappingURL=post-resume.js.map