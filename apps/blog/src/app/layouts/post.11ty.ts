import type { Data } from '../types/data';
import { backToBlog } from '../templates/back-to-blog';
import postItem from '../templates/post-item';
import { join } from '../utilities/join';

class Post {
  data() {
    return {
      layout: 'base.11ty.js',
    };
  }

  render(data: Data) {
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
          ${join(data.collections.posts.map(postItem))}
        </aside>
      </div>
      ${backToBlog}
    `;
  }
}

module.exports = Post;
