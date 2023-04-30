import { postResume } from '../templates/post-resume';
import { join } from '../utilities/join';
import { Data } from '../types/data';
import { collection } from '../utilities/collection';

class Blog {
  data() {
    return {
      layout: 'base.11ty.js',
      title: 'DevPR Blog',
    };
  }

  render(data: Data) {
    return `
      <section>
        ${collection(data, 'posts', postResume)}
      </section>
    `;
  }
}

module.exports = Blog;
