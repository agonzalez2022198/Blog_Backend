import Blog from "../blog/blog.model.js";

export const existeBlogByID = async (id = '') => {
    const existeBlog = await Blog.findById(id);
    if (!existeBlog){
        throw new Error(`El ID: ${id} No existe`);
    }
}