import {Router} from "express"
import {check} from "express-validator"

import {
    getBlogs, postBlog
} from "./blog.controller";

const router = Router();

router.get("/", getBlogs);

router.post(
    "/blog",
    [
      check("title", "El title es obligatorio").not().isEmpty(),
      check("author", "El author es obligatorio").not().isEmpty(),
      check("content", "El content es obligatorio").not().isEmpty(),
      check("image", "El title es obligatorio").not().isEmpty(),
      check("comments", "El title es obligatorio").not().isEmpty()

    ],
    postBlog
);


export default router;