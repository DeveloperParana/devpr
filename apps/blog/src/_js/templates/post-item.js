"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_image_1 = require("./post-image");
const postItem = (props) => {
    const { data, url } = props;
    return `
    <p>
      <a href="${url}">${data.title}</a>
      ${data.image ? (0, post_image_1.postImage)(props) : ''}
      <small>${data.resume}</small>
    </p>
  `;
};
exports.default = postItem;
//# sourceMappingURL=post-item.js.map