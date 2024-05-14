import { Double } from "mongodb";
import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    author:{type:String},
    content: {type:String},
    date: {type:Date, default: Date.now},
    state: {type: Boolean, default: true}
})

export default mongoose.model('Message', messageSchema)