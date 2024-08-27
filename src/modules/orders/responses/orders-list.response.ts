import Order from "../orders.model";

export interface OrderListResponse {
    data: Order[];
    page: number;
    perPage: number;
    totalPages: number;
}
