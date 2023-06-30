"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    theoreticalPoint: Number,
    practicePoints: Number,
    describe: String,
    evaluate: String,
    class: String
});
exports.Student = (0, mongoose_1.model)('product', productSchema);
//# sourceMappingURL=student.js.map