import { IUserRepository } from "../domain/interface/IUserRepository";
import { Prefecture } from "../domain/valueobject/PrefectureValue";

export class UserEmailUsecase {
  constructor(private readonly userRepository: IUserRepository) {}

  // 都道府県を指定してユーザーのメールアドレスを取得する
  async sendEmail(prefecture?: string[]): Promise<void | Error> {
    const filterPrefectures = prefecture ?? Object.values(Prefecture);
    const users = await this.userRepository.findAll(filterPrefectures);
    const emails = users.map((user) => user.email);
    // ここでメール送信処理を行う
    console.log(emails);
  }
}
