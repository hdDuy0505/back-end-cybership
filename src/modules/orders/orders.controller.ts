import { PaginationParam } from './interfaces/orders.interface';
import { Request, Response } from 'express';
import OrderRepository from './orders.repository';

export default class ModelController {
    async getAllOrders(req: Request, res: Response) {
        const perPage = parseInt(req.query.perPage as string, 10) || 10;
        const page = parseInt(req.query.page as string, 10) || 1;

        const paginationParams: PaginationParam = {
            perPage,
            page,
        };

        try {
            const orders = await OrderRepository.retrieveAll(paginationParams);

            return res.status(200).json(orders);
        } catch (error) {
            console.log('🚀 ~ error', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
