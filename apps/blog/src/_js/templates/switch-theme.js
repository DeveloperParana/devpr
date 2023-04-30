"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchTheme = void 0;
const switchTheme = (id = 'switch-theme') => {
    return `
    <details role="list" dir="rtl" id="${id}">
      <summary aria-haspopup="listbox" role="link" class="contrast">Tema</summary>
      <ul role="listbox">
        <li>
          <a href="#" data-value="auto">Automático</a>
        </li>
        <li>
          <a href="#" data-value="light">Claro</a>
        </li>
        <li>
          <a href="#" data-value="dark">Escuro</a>
        </li>
      </ul>
    </details>
    <script type="module" defer>
      const html = document.querySelector('html')
      const switchTheme = document.querySelector('#switch-theme')
      if (html && switchTheme) {
        const buttons = switchTheme.querySelectorAll('a')
        buttons.forEach(button => {
          button.onclick = (e) => {
            e.preventDefault()
            html.dataset.theme = button.dataset.value
          }
        })
      }
    </script>
  `;
};
exports.switchTheme = switchTheme;
//# sourceMappingURL=switch-theme.js.map