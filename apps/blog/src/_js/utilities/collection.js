"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection = void 0;
const join_1 = require("./join");
function collection(data, key, fn) {
    return (0, join_1.join)(data.collections[key].map((value) => {
        return Array.isArray(value) ? value.map(fn) : fn(value);
    }));
}
exports.collection = collection;
//# sourceMappingURL=collection.js.map