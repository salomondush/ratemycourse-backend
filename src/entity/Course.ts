import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";
import { Rating } from "./Rating";

@Entity()
export class Course {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    department: string;

    @Column()
    required: boolean;

    ratings: Rating[];

} 
 