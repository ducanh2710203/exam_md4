"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const home_controller_1 = __importDefault(require("../controller/home.controller"));
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', home_controller_1.default.getHomePage);
exports.router.get('/create', home_controller_1.default.getCreatePage);
exports.router.post('/create', home_controller_1.default.createStudent);
exports.router.get('/delete/:id', home_controller_1.default.deleteStudent);
exports.router.get('/edit/:id', home_controller_1.default.getEditPage);
exports.router.post('/edit/:id', home_controller_1.default.EditStudent);
exports.router.get('/detail/:id', home_controller_1.default.getDetailPage);
exports.router.get('*', (req, res) => {
    res.render('404');
});
//# sourceMappingURL=router.js.map