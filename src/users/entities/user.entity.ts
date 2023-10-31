import { Role } from "./../../common/enums/rol.enum";
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, select: false })
    password: string;

    @Column({ type: 'enum', default: Role.USER, enum: Role  })
    role: Role;

    @DeleteDateColumn()
    deletedAt: Date;

}
