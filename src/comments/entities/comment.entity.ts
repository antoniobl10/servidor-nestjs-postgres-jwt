import { User } from "../../users/entities/user.entity";
import { BlogArticle } from "./../../blog/entities/blog.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class blogComment {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    date: Date;

    @Column()
    author: string;

    @Column()
    content: string;

    @ManyToOne(() => BlogArticle , (blog) => blog.id, 
    {eager: true})
    blog: BlogArticle;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userEmail', referencedColumnName: 'email',  })
    user: User;

    @Column()
    userEmail: string;

}
