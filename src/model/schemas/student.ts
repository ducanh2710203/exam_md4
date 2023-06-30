import { Schema,model } from "mongoose";
const productSchema = new Schema({
    name: String,
    theoreticalPoint: Number,
    practicePoints: Number,
    describe:String,
    evaluate: String,
    class:String
})
export const Student = model('product',productSchema)