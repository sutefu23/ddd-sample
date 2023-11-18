import { User } from "../entity/UserEntity";

export interface IUserRepository {
  find(id: string): Promise<User | null>;
  findAll(prefectures: string[]): Promise<User[]>; // レポジトリは与えられた条件に基づいての件数の取得に徹する
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
