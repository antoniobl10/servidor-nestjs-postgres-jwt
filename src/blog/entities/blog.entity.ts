import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { blogComment } from "./../../comments/entities/comment.entity";

@Entity()
export class BlogArticle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column()
    author: string;

    @Column()
    content: string;

    @OneToMany(() => blogComment, (comment) => comment.blog )
    comments: blogComment[];
}
