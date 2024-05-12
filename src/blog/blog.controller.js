import axios from "axios"
import Blog from "./blog.model.js"
import { response, request } from "express";
import mongoose from 'mongoose';

export const getBlogs = async (req , res) => {
    const {start, end} = req.query
    const query = {state: true}

    const [total, blogs] = await Promise.all([
        Blog.countDocuments(query),
        Blog.find(query)
        .skip(Number(start))
        .limit(Number(end))
    ])

    res.status(200).json({
        total, blogs
    })
}


export const postBlog = async (req, res) => {

    if(!req.body){
        return res.status(400).json({error: "Esta vacío..."})
    }

    //const ObjectId = mongoose.Types.ObjectId;
    const {title, author, content, image } = req.body;
    //const commentsIds = comments.map(comment => new ObjectId(comment));
    const blog = new Blog ({title, author, content, image})

    await blog.save()

    res.status(200).json({
        blog
    });

}