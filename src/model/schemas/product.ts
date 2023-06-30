import { Schema,model } from "mongoose";
const productSchema = new Schema({
    name: String,
    age: Number,
    score: Number,
})
export const Product = model('product',productSchema)