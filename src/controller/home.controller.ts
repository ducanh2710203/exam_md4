import {Product} from "../model/schemas/product";

class HomeController {
    static async getHomePage(req, res) {
        try {
            const listProduct = await Product.find()
            res.render('home', {listProduct})
        } catch (err) {
            console.log(err.message)
        }
    }

    static async getCreatePage(req, res) {
        try {
            res.render('create')
        } catch (err) {
            console.log(err.message)
        }
    }

    static async deleteProduct(req, res) {
        await Product.findByIdAndDelete(req.params.id)
        res.redirect("/")
    }

    static async getEditPage(req, res) {
        try {
            const id = req.params.id
            const product = await Product.findOne({_id: id})
            console.log(product)
            res.render('edit', {product})
        } catch (err) {
            console.log(err.message)
        }
    }

    static async EditProduct(req, res) {
        try {
            const id = req.params.id
            const currentProduct = await Product.findOne({_id: id})
            if(currentProduct){
                await Product.updateOne({...req.body})
                res.redirect('/')
            }else {
                res.redirect("/edit/:id")
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    static async createProduct(req, res) {
        try {
            const id = req.params.id
            const newProduct = await new Product({...req.body})
            if(newProduct){
                await newProduct.save()
                res.redirect('/')
            }else {
                res.redirect("/edit/:id")
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    static async searchProduct(req, res) {
    try {
        const keywordSearch = req.query.keyword || '';
        console.log(keywordSearch)
    }catch (err) {
        console.log(err.message)
    }
    }
}

export default HomeController;