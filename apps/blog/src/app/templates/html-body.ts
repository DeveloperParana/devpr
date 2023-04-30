import { navigation } from './navigation';
import type { Data } from '../types';

export const htmlBody = (data: Data) => {
  const { title, content, metadata } = data;

  return `
  <!doctype html>
  <html lang="${metadata.language}" data-theme="dark">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/scss/styles.css">
      <meta name="description" content="${metadata.description}">
      <title>${title || 'DevPR Blog'}</title>
    </head>
    <body>
      <div class="hero">
        ${navigation(data)}
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
