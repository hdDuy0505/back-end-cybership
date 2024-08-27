import { PaginationParam } from './interfaces/orders.interface';
import Order from './orders.model';
import { OrderListResponse } from './responses/orders-list.response';

interface IOrderRepository {
    retrieveAll(paginationParam: PaginationParam): Promise<OrderListResponse>;
}

class OrderRepository implements IOrderRepository {
    async retrieveAll(
        paginationParams: PaginationParam
    ): Promise<OrderListResponse> {
        try {
            const { perPage, page } = paginationParams;
            const offset = (page - 1) * perPage;
            const limit = perPage;

            const result = await Order.findAndCountAll({
                limit,
                offset,
                order: [['createdAt', 'DESC']],
            });

            return {
                data: result.rows,
                page: page,
                perPage: perPage,
                totalPages: Math.ceil(result.count / perPage),
            } as OrderListResponse;
        } catch (error) {
            throw new Error('Failed to retrieve Orders!');
        }
    }
}

export default new OrderRepository();
