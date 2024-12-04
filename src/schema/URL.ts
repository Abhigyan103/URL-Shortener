import mongoose from "mongoose";

const URL = new mongoose.Schema({
    original:{
        type: String,
        required:true,
        unique: true
    },
    shortened:{
        type: String,
        required:true,
        unique: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model('url', URL);