import * as express from 'express';
import { createRating } from '../controller/ratings.controller';

//import {createCourse, getAllCourses, getSingleCourse} from '../controller/courses.controller';


const router = express.Router();

router.post('', createRating); 


export default router;