"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlBody = void 0;
const navigation_1 = require("./navigation");
const htmlBody = (data) => {
    const { title, content, metadata } = data;
    return `
  <!doctype html>
  <html lang="${metadata.language}" data-theme="dark">
    <head>
      <meta charset="utf-8">
      <base href="${data.baseUrl}">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="${data.baseUrl}scss/styles.css">
      <meta name="description" content="${metadata.description}">
      <title>${title || 'DevPR Blog'}</title>
    </head>
    <body>
      <div class="hero">
        ${(0, navigation_1.navigation)(data)}
        <header class="container">
          <h2 class="text-shadow-drop-center">${metadata.description}</h2>
          <h1 class="text-shadow-drop-center">${title}</h1>
        </header>
      </div>
      <main class="container">
        ${content}
      </main>
    </body>
  </html>
  `;
};
exports.htmlBody = htmlBody;
//# sourceMappingURL=html-body.js.map