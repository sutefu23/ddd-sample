import { User } from "../entity/UserEntity";

export interface IUserRepository {
  find(id: string): Promise<User | null>;
  findAll(prefectures?: string[]): Promise<User[]>; //都道府県でもフィルターできる
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
