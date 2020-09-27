import { User } from 'models/user.model';

export interface ProfileService {
  getUserInfo(): Promise<User>
}