import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    state: {type: Boolean, default: true},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
});

export default mongoose.model('Blog', blogSchema);
