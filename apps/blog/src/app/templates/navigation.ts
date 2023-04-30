import type { Data } from '../types/data';
import { logo } from './logo';
import { switchTheme } from './switch-theme';

export const navigation = (data: Data, id = 'navigation') => {
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
          ${switchTheme()}
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
