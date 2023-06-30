import express = require('express');
import bodyParser from "body-parser";
import {router} from "./src/router/router";
import {ConnectDB} from "./src/model/conectDb";
const app = express();
const port = 2759
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', "ejs")
app.set("views", "./src/views")
app.use(router)
const db = new ConnectDB();
db.connect().then(r => {
    console.log(`connect database successfully`);
}).catch(err => {
    console.log(`connect database error`);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
