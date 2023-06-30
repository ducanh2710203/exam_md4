import express = require('express');
import bodyParser from "body-parser";
import path from "path";
import passport from "passport";
import HomeController from "./src/controller/home.controller";
import {ConnectDB} from "./src/model/conectDb";
const app = express();
const port = 2759
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', "ejs")
app.set("views", "./src/views")
const db = new ConnectDB();
db.connect().then(r => {
    console.log(`connect database successfully`);
}).catch(err => {
    console.log(`connect database error`);
})
app.get('/', HomeController.getHomePage)
app.get('/create', HomeController.getCreatePage)
app.post('/create', HomeController.createStudent)
app.get('/delete/:id', HomeController.deleteStudent)
app.get('/edit/:id', HomeController.getEditPage)
app.post('/edit/:id', HomeController.EditStudent)
app.get('/detail/:id', HomeController.getDetailPage)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
