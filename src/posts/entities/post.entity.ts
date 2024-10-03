import { User } from "src/users/entities/user.entity";
import { BaseEntity} from "src/utils/db/base.entity";
import { Entity, Column, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Post extends BaseEntity {
    @Column()
    tittle: string;

    @Column()
    theme: string;

    @Column()
    datePublication: Date;

    @ManyToOne(() => User, (user) => user.posts)
    author: User;
}