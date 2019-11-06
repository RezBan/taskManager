import { User } from "../../user/user.entity";

export interface CreateTaskDTO {
  ownerId: number,
  taskName: string;
  description: string;
  status: number;
  priority: number;
  spendTime: string;
  plainTime: string;
}

export interface DeleteTaskDTO {
  id: number;
  owner: User,
  taskName?: string;
  description?: string;
  status?: number;
  priority?: number;
  spendTime?: string;
  plainTime?: string;
  isDeleted?: boolean;
}