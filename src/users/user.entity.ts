import { Column, Entity } from "typeorm";

@Entity()
export class User {
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}