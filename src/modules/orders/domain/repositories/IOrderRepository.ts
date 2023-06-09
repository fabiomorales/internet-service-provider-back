import { IPlan } from '@modules/plans/domain/models/IPlan';
import { IOrder } from '../models/IOrder';

export interface IOrderRepository {
  findById(id: string): Promise<IOrder | undefined>;
  findAll(): Promise<Array<IOrder & IPlan>>;
  create(order: Partial<IOrder>): Promise<IOrder>;
  update(id: string, order: Partial<IOrder>): Promise<IOrder>;
  delete(id: string): Promise<void>;
}
