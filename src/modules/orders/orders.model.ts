import {
    Model,
    Table,
    Column,
    DataType,
    CreatedAt,
    Default,
    UpdatedAt,
    DeletedAt,
} from 'sequelize-typescript';

@Table({
    tableName: 'orders',
    timestamps: false,
})
export default class Order extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
    })
    id?: number;

    @Column({
        type: DataType.STRING(255),
        field: 'customer_name',
    })
    customerName?: string;

    @Column({
        type: DataType.STRING(255),
        field: 'status',
    })
    status?: string;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt?: Date;

    @CreatedAt
    @Default(new Date())
    @Column({ field: 'created_at' })
    createdAt?: Date;

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt?: Date;
}
