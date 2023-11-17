import { isNullOrUndefined } from "@shared/lib/isNullOrUndefined";
import { isObject } from "@shared/lib/isObject";

type ApiError = {
  message: string;
};

export const isApiError = (error: unknown): error is ApiError => {
  if (isNullOrUndefined(error) || !isObject(error) || !("message" in error)) {
    return false;
  }

  return true;
};
