import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string

const connectDb = async ()=>{
    await mongoose.connect(MONGO_URI)
            .then(()=> console.log("MongoDB connected"))
            .catch((err)=>{
                console.log("MongoDB connection error, check logs")
                //TODO: Add to logs
            })
}
export default connectDb;