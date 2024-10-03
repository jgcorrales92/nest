import { Exclude } from "class-transformer";
import { Post } from "src/posts/entities/post.entity";
import { BaseEntity } from "src/utils/db/base.entity";
import { Entity, Column, ManyToMany, OneToOne, JoinColumn, OneToMany, JoinTable } from "typeorm";
import { Profile } from "./profile.entity";
import { Service } from "src/services/entities/service.entity";


@Entity()
export class User extends BaseEntity {

    @Column()
    @Exclude()
    passwd: string;

    @Column()
    passport: string;

    @OneToOne(() => Profile, (profile)=>profile.user, {cascade:true})
    @JoinColumn()
    profile?: Profile;

    @OneToMany(() => Post, (post) => post.author/*, {
        eager: true
    }*/)
    posts: Post[];

   /* @ManyToMany(() => User, (user) => user.services)
      @JoinTable({
        name: 'user_service', // Nombre de la tabla intermedia
        joinColumns: [{ name: 'service_id', referencedColumnName: 'id' }],
        inverseJoinColumns: [{ name: 'user_id', referencedColumnName: 'id' }]
      })*/
    services: Service[];
} 