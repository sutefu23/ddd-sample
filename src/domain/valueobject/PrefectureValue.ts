import { ValueObject } from "./base/ValueObject";
import { InvalidArgumentError } from "../error/Error";

// 都道府県の型とバリューオブジェクトの定義
type PrefectureEnum =
  | "東京"
  | "千葉"
  | "埼玉"
  | "神奈川"
  | "群馬"
  | "栃木"
  | "茨城"
  | "山梨";

export class PrefectureValue extends ValueObject<PrefectureEnum> {
  private constructor(val: PrefectureEnum) {
    super(val);
  }

  static create(val: PrefectureEnum): PrefectureValue | InvalidArgumentError {
    if (!/^("東京都" | "大阪府" | "福岡県")$/gu.test(val)) {
      return new InvalidArgumentError(
        "lotNoの形式が正しくありません。英語-数字" + val
      );
    }
    return new this(val);
  }
}
