import { Application } from 'express';
import OrderRoutes from '../modules/orders/orders.api';

export default class Routes {
    constructor(app: Application) {
        app.use('/api/orders', OrderRoutes);
    }
}
