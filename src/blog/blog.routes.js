import {Router} from "express"
import {check} from "express-validator"

import {
    getBlogs, postBlog, getBlogByID
} from "./blog.controller.js";

//import existeBlogByID from "../helpers/db-validator.js"

const router = Router();

router.get("/blogs", getBlogs);

router.post(
    "/addBlog",
    [
      check("title", "El title es obligatorio").not().isEmpty(),
      check("author", "El author es obligatorio").not().isEmpty(),
      check("content", "El content es obligatorio").not().isEmpty(),
      check("image", "El title es obligatorio").not().isEmpty()

    ],
    postBlog
);


/*router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeBlogByID),
  ],
  getUsuarioById
);*/


export default router;