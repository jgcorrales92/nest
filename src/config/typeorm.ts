import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { Profile } from "src/users/entities/profile.entity";
import { User } from "src/users/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: `${process.env.POSTGRES_HOST}`,
    port: `${process.env.POSTGRES_PORT}`,
    username: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASSWORD}`,
    database: `${process.env.POSTGRES_DATABASE}`,
    entities: ["dist/**/*.entity{.ts,.js}"],
    //migrations: ["dist/database/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: true,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);
