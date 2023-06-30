"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const faker = require('faker');
class ConnectDB {
    async connect() {
        await mongoose_1.default.connect('mongodb://127.0.0.1:27017/exams');
    }
}
exports.ConnectDB = ConnectDB;
//# sourceMappingURL=conectDb.js.map