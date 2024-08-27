import { Dialect } from "sequelize";

export const database = () => ({
    host: process.env.POSTGRES_HOST as string,
    username: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DB as string,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialect: 'postgres' as Dialect,
});
