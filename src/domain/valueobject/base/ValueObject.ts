import { shallowEqual } from "shallow-equal-object";

export abstract class AbstractValueObject<T> {
  protected readonly _value: T;

  protected constructor(value: T) {
    this._value = Object.freeze(value);
  }

  get value(): T {
    return this._value;
  }

  equals(vo?: AbstractValueObject<T>): boolean {
    if (vo == null) {
      return false;
    }
    return shallowEqual(this._value, vo._value);
  }
}

interface ValueObjectProps {
  [key: string]: unknown;
}

export abstract class ValueObject<
  T extends ValueObjectProps | number | string
> extends AbstractValueObject<T> {}
