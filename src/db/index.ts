import { Sequelize } from 'sequelize-typescript';
import { database } from '../config/db.config';
import Order from '../modules/orders/orders.model';

class Database {
    public sequelize: Sequelize | undefined;

    constructor() {
        this.connectToDatabase();
    }

    private async connectToDatabase() {
        const dbConfig = database();

        this.sequelize = new Sequelize({
            ...dbConfig,
            models: [Order],
        });

        await this.sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch((err) => {
                console.error('Unable to connect to the Database:', err);
            });
    }
}

export default Database;
