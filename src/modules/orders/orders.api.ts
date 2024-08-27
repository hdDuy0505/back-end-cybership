import { Router } from 'express';
import ModelController from './orders.controller';

class OrderRoutes {
    router = Router();
    modelController = new ModelController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get('/', this.modelController.getAllOrders);
    }
}

export default new OrderRoutes().router;
