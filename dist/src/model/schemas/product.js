"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    score: Number,
});
exports.Product = (0, mongoose_1.model)('product', productSchema);
//# sourceMappingURL=product.js.map