type LooseAutoComplete<T extends string> = T | Omit<string, T>;

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Expect<T extends true> = T;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
