"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInstance = randomInstance;
function randomInstance(types) {
    const index = Math.floor(Math.random() * types.length);
    return types[index];
}
//# sourceMappingURL=utils.js.map