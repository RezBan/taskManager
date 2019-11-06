export interface CreateUserDTO {
  email: string,
  password: string
}

export interface UserWithoutPasswordDTO {
  id: number;
  email: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}