export const isNullOrUndefined = (arg: unknown): arg is null | undefined =>
  arg === null || arg === undefined;
