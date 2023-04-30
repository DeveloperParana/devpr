"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const back_to_blog_1 = require("../templates/back-to-blog");
const post_item_1 = tslib_1.__importDefault(require("../templates/post-item"));
const join_1 = require("../utilities/join");
class Post {
    data() {
        return {
            layout: 'base.11ty.js',
        };
    }
    render(data) {
        const dateReadable = data.page.date.toDateString();
        const [date] = data.page.date.toISOString().split('T');
        return `
      <div class="grid">

        <article>
          <em>
            ${data.author},

            <time class="text-muted" datetime="${date}">
              ${dateReadable}
            </time>

          </em>

          <br><hr><br>

          <div>${data.resume}</div>

          <br><hr><br>

          <div>${data.content}</div>

        </article>

        <aside>
          ${(0, join_1.join)(data.collections.posts.map(post_item_1.default))}
        </aside>
      </div>
      ${back_to_blog_1.backToBlog}
    `;
    }
}
module.exports = Post;
//# sourceMappingURL=post.11ty.js.map