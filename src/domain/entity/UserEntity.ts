import { Entity, EntityProps } from "../base/Entity";
import { InvalidArgumentError } from "../error/Error";
import { PrefectureValue } from "../valueobject/PrefectureValue";

// ユーザーエンティティのProps定義
interface UserProps extends EntityProps {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly prefecture: PrefectureValue;
}

// ユーザーエンティティの定義
export class User extends Entity<UserProps> {
  private constructor(props: UserProps) {
    super(props);
  }

  public static create = (props: UserProps): User | InvalidArgumentError => {
    if (props.name == null) {
      return new InvalidArgumentError("Name is required.");
    }
    if (props.prefecture == null) {
      return new InvalidArgumentError("Prefecture is required.");
    }
    // emailのバリデーション英数字-@-英数字になってるかチェック
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/.test(props.email)) {
      return new InvalidArgumentError("Email is invalid.");
    }

    return new User(props);
  };

  public static restore = (props: UserProps): User => {
    return new User(props);
  };

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get prefecture(): PrefectureValue {
    return this.props.prefecture;
  }
}
