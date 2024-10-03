import { User } from "src/users/entities/user.entity";
import { BaseEntity} from "src/utils/db/base.entity";
import { Entity, Column, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Service extends BaseEntity {
    @Column()
    typeService: string;

    @Column()
    dateEnd:Date;

    @Column()
    dateStart:Date;

    /*@ManyToMany(() => Service, (service) => service.users)
      @JoinTable({
        name: 'user_service', // Nombre de la tabla intermedia
        joinColumns: [{ name: 'user_id', referencedColumnName: 'id' }],
        inverseJoinColumns: [{ name: 'service_id', referencedColumnName: 'id' }]
      })*/
    users: User[];
}