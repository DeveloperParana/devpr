"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_resume_1 = require("../templates/post-resume");
const collection_1 = require("../utilities/collection");
class Blog {
    data() {
        return {
            layout: 'base.11ty.js',
            title: 'DevPR Blog',
        };
    }
    render(data) {
        return `
      <section>
        ${(0, collection_1.collection)(data, 'posts', post_resume_1.postResume)}
      </section>
    `;
    }
}
module.exports = Blog;
//# sourceMappingURL=blog.11ty.js.map