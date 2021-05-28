import * as express from 'express';
import {NextFunction, Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { Course } from '../entity/Course';
import { Rating } from '../entity/Rating';

export const createRating = async (request: Request, response: Response, next: NextFunction) => {
    const ratingTable = getRepository(Rating);
    
    // retrieve data from the request object
    const {professor, commnet, difficulty, rating, takeAgain, courseID} = request.body;

    // create entity course with the data that has been passed in
    const newRating = new Rating();

    newRating.professor = professor;
    newRating.comment = commnet;
    newRating.difficulty = difficulty;
    newRating.rating = rating;
    newRating.takeAgain = takeAgain;
    newRating.course = courseID;


    // insert entity course into database
    const insertedRating = await ratingTable.save(newRating);

    response.json(insertedRating);
}