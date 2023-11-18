export interface EntityProps {
  readonly id: string;
  readonly [key: string]: unknown;
}

export class Entity<T extends EntityProps> {
  protected readonly props: T;
  protected constructor(props: T) {
    this.props = Object.freeze(props);
  }

  protected create = (props: T): Entity<T> | Error => {
    return new Entity(props);
  };

  protected restore = (props: T): Entity<T> => {
    return new Entity(props);
  };

  protected equals = (other: typeof this): boolean => {
    return other.props.id === this.props.id;
  };
}
