import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Course} from "./entity/Course";
import {createCourse, getSingleCourse, getAllCourses} from './controller/courses.controller';
import  coursesRouter from './routes/course.routes';
import ratingsRouter from './routes/ratings.routes';

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use('/api/v1/courses', coursesRouter);
    app.use('/api/v1/ratings', ratingsRouter);
    
    // setup express app here
    // ...

    // start express server
    app.listen(3000);



    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
