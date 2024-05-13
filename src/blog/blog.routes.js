import {Router} from "express"
import {check} from "express-validator"

import {
    getBlogs, postBlog
} from "./blog.controller.js";

const router = Router();

router.get("/blogs", getBlogs);

router.post(
    "/addBlog",
    [
      check("title", "El title es obligatorio").not().isEmpty(),
      check("author", "El author es obligatorio").not().isEmpty(),
      check("content", "El content es obligatorio").not().isEmpty(),
      check("image", "El title es obligatorio").not().isEmpty()
      //check("comments", "El title es obligatorio").not().isEmpty()

    ],
    postBlog
);


export default router;