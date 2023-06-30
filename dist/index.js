"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = require("./src/router/router");
const conectDb_1 = require("./src/model/conectDb");
const app = express();
const port = 2759;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.set('view engine', "ejs");
app.set("views", "./src/views");
app.use(router_1.router);
const db = new conectDb_1.ConnectDB();
db.connect().then(r => {
    console.log(`connect database successfully`);
}).catch(err => {
    console.log(`connect database error`);
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map