import HomeController from "../controller/home.controller";
import {Router} from "express";
export const router = Router();
    router.get('/', HomeController.getHomePage)
    router.get('/create', HomeController.getCreatePage)
    router.post('/create', HomeController.createStudent)
    router.get('/delete/:id', HomeController.deleteStudent)
    router.get('/edit/:id', HomeController.getEditPage)
    router.post('/edit/:id', HomeController.EditStudent)
    router.get('/detail/:id', HomeController.getDetailPage)
    router.get('*', (req, res)=>{
        res.render('404')
    })
