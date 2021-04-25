import { Column, CreatedAt, Table, UpdatedAt, Model } from "sequelize-typescript";

@Table({'tableName': 'log_request'})
export class LogRequest extends Model<LogRequest> {
    @Column
    ip: string;

    @Column
    @CreatedAt
    created_at: Date;

    @Column
    @UpdatedAt
    updated_at: Date
}