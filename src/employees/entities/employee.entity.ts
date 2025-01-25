import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './../../common/config/base.entity';
import { OrderEntity } from './../../orders/entities/order.entity';

@Entity('employee')
export class EmployeeEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'timestamp' })
  birthDate: Date;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar', length: 100 })
  phone: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  note?: string;

  @OneToMany(() => OrderEntity, (order) => order.employee)
  orders: OrderEntity[];
}
