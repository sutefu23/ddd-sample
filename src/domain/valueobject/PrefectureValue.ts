import { ValueObject } from "./base/ValueObject";
import { InvalidArgumentError } from "../error/Error";

// 都道府県の型とバリューオブジェクトの定義
const Prefecture = {
  Tokyo: "東京",
  Chiba: "千葉",
  Saitama: "埼玉",
  Kanagawa: "神奈川",
  Gunma: "群馬",
  Tochigi: "栃木",
  Ibaraki: "茨城",
  Yamanashi: "山梨",
} as const;

type PrefectureEnum = (typeof Prefecture)[keyof typeof Prefecture];

export class PrefectureValue extends ValueObject<PrefectureEnum> {
  private constructor(val: PrefectureEnum) {
    super(val);
  }

  static create(val: PrefectureEnum): PrefectureValue | InvalidArgumentError {
    if (!Object.values(Prefecture).includes(val)) {
      return new InvalidArgumentError("Prefecture is invalid.");
    }
    return new this(val);
  }
}
