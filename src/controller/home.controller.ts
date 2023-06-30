import {Student} from "../model/schemas/student";

class HomeController {
    static async getHomePage(req, res) {
        try {
            const sortStudent = await Student.find().sort({"theoreticalPoint": 1})
            res.render('home', {listStudent:sortStudent})
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

    static async deleteStudent(req, res) {
        await Student.findByIdAndDelete(req.params.id)
        res.redirect("/")
    }

    static async getEditPage(req, res) {
        try {
            const id = req.params.id
            const student = await Student.findOne({_id: id})
            res.render('edit', {student})
        } catch (err) {
            console.log(err.message)
        }
    }

    static async EditStudent(req, res) {
        try {
            const id = req.params.id
            let {name,theoreticalPoint,practicePoints,describe,evaluate}= req.body
            const currentStudent = await Student.findOne({_id: id})
            if(currentStudent){
                currentStudent.name = name;
                currentStudent.theoreticalPoint = theoreticalPoint;
                currentStudent.practicePoints = practicePoints;
                currentStudent.describe = describe;
                currentStudent.evaluate = evaluate;
                currentStudent.class = req.body.class;
                await currentStudent.save();
                // await Student.updateOne({_id: id},
                //     {$set:{currentStudent}})
                res.redirect('/')
            }else {
                res.redirect("/fj")
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    static async createStudent(req, res) {
        try {
            const id = req.params.id
            const newStudent = await new Student({...req.body})
            if(newStudent){
                await newStudent.save()
                res.redirect('/')
            }else {
                res.redirect("/")
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    static async getDetailPage(req, res) {
        try {
            const id = req.params.id
            const student = await Student.findOne({_id:id})
            if (student){
                res.render('detail', {student})
            }else {
                res.redirect('/')
            }

        } catch (err) {
            console.log(err.message)
        }
    }

}

export default HomeController;