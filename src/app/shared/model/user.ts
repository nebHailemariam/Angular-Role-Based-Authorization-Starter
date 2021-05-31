import { Role } from './role';

export class User {
  id: number;
  email: string;
  username: string;
  password?: string;
  role: Role;
  token?: string;
  __v?: number;
}
