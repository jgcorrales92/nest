import { Exclude } from "class-transformer";
import { BaseEntity } from "src/utils/db/base.entity";
import { Entity, Column, ManyToMany, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile extends BaseEntity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @OneToOne(() => User, (user)=>user.profile)
    user:User;
} 