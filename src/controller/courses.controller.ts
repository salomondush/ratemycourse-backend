import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { Course } from '../entity/Course';
import { Rating} from '../entity/Rating';

export const createCourse = async (request: Request, response: Response, next: NextFunction) => {
    const courseTable = getRepository(Course);
    
    // retrieve data from the request object
    const {name, description, department, required} = request.body;

    // create entity course with the data that has been passed in
    const newCourse = new Course();

    newCourse.name = name;
    newCourse.description = description;
    newCourse.department = department;
    newCourse.required = required;

    // insert entity course into database
    const insertedCourse = await courseTable.save(newCourse);

    response.json(insertedCourse);
}

export const getSingleCourse = async (request: Request, response: Response, next: NextFunction) => {
    const courseTable = getRepository(Course); 
    const ratingsTable = getRepository(Rating);
    
    const courseID = request.params.courseid;

    // insert entity course into database
    const course = await courseTable.findOne(courseID);

    const allRatingsPerCourse = await ratingsTable.find({
        course: courseID
    })

    course.ratings = allRatingsPerCourse;

    response.json(course);
}

export const getAllCourses = async (request: Request, response: Response, next: NextFunction) => {
    const courseTable = getRepository(Course);
    

    // insert entity course into database
    const courses = await courseTable.find();

    response.json(courses);
}
