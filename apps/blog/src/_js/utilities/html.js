"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
function html(strings, ...values) {
    return strings.map((str, i) => str + (values[i] ?? '')).join('');
}
exports.html = html;
//# sourceMappingURL=html.js.map