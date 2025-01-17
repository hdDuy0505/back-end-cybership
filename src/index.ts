import express, { Application } from 'express';
import cors from 'cors';
import Routes from './routes';
import Database from './db';

export default class Server {
    constructor(app: Application) {
        this.config(app);
        this.syncDatabase();
        new Routes(app);
    }

    private config(app: Application): void {
        app.use(
            cors({
                credentials: true,
            })
        );
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }

    private syncDatabase(): void {
        const db = new Database();
        db.sequelize?.sync();
    }
}
