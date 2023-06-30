import { Schema,model } from "mongoose";
const StudentSchema = new Schema({
    name: String,
    theoreticalPoint: Number,
    practicePoints: Number,
    describe:String,
    evaluate: String,
    class:String
})
export const Student = model('Student',StudentSchema)