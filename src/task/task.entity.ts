import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(type => User, user => user.tasks)
  user: User

  @Column()
  taskName: string;

  @Column()
  description: string;

  @Column()
  status: number;

  @Column()
  priority: number;

  @Column()
  spendTime: string;

  @Column()
  plainTime: string;

  @Column({
    default: false,
  })
  isDeleted: boolean;

  @Column({
    default: new Date(),
  })
  createdAt: Date;

  @Column({
    default: new Date(),
  })
  updatedAt: Date;
}
