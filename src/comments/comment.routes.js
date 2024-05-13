import {Router} from "express"
import {check} from "express-validator"

import {
    getComments, postComment
} from "./comment.controller.js";

const router = Router();

router.get("/comments", getComments);

router.post(
    "/addComment",
    [
      check("author", "El author es obligatorio").not().isEmpty(),
      check("content", "El content es obligatorio").not().isEmpty()
    ],
    postComment
);


export default router;