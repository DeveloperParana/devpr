"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = void 0;
const switch_theme_1 = require("./switch-theme");
const navigation = (data, id = 'navigation') => {
    return `
    <nav class="container-fluid" id="${id}">
      <ul>
        <li>
          <a href="${data.baseUrl}" class="contrast grid">
            <strong>${data.metadata.title}</strong>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          ${(0, switch_theme_1.switchTheme)()}
        </li>
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" class="contrast">Apps</summary>
            <ul role="listbox">
              <li><a href="${data.baseUrl}blog">Blog</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  `;
};
exports.navigation = navigation;
//# sourceMappingURL=navigation.js.map