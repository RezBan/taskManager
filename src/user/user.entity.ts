import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany(type => Task, task => task.user)
  tasks: Task[]

  @Column()
  email: string;

  @Column()
  password: string;

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
