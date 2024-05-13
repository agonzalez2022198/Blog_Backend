'use strict'

import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import {dbConnection} from "./mongo.js"
import blogRoutes from "../src/blog/blog.routes.js"
import commentRoutes from "../src/comments/comment.routes.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.blogPath = '/blog/blog'
        this.commentPath = '/blog/blog/comment'

        this.middlewares();
        this.conectarDB();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        //this.app.use(apiLimiter);
    }

    routes(){
        this.app.use(this.blogPath, blogRoutes);
        this.app.use(this.commentPath, commentRoutes);
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}


export default Server;