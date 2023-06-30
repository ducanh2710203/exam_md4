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
app.post('/create', HomeController.createProduct)
app.get('/delete/:id', HomeController.deleteProduct)
app.get('/edit/:id', HomeController.getEditPage)
app.post('/edit/:id', HomeController.EditProduct)
app.get("/search", HomeController.searchProduct)
// app.delete('/delete', HomeController)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
