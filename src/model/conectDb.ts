import mongoose from "mongoose";

const faker = require('faker');

export class ConnectDB {
    async connect() {
        await mongoose.connect('mongodb://127.0.0.1:27017/exams');

    }
}