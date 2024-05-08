import axios from "axios"
import Blog from "./blog.model"

export const getBlogs = async (res, req) => {
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


export const postBlog = async (res, req) => {
    
    const {title, author, content, image, comments } = req.body
    const blog = new Blog ({title, author, content, image, comments})

    await blog.save()

    res.status(200).json({
        blog
    });

}