import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String },
    state: {type: Boolean, default: true}
});

export default mongoose.model('Blog', blogSchema);
