import Comment from "./comments.model.js"
import { response, request } from "express";
import mongoose from 'mongoose';

export const getComments = async (req , res) => {
    const {start, end} = req.query
    const query = {state: true}

    const [total, comments] = await Promise.all([
        Comment.countDocuments(query),
        Comment.find(query)
        .skip(Number(start))
        .limit(Number(end))
    ])

    res.status(200).json({
        total, comments
    })
}


export const postComment = async (req, res) => {

    if(!req.body){
        return res.status(400).json({error: "Esta vacío..."})
    }

    
    const { author, content } = req.body;
    const comment = new Comment ({author, content})

    await comment.save()

    res.status(200).json({
        comment
    });

}