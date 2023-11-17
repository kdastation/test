import { isNullOrUndefined } from "@shared/lib/isNullOrUndefined";
import { isObject } from "@shared/lib/isObject";
import { AxiosError } from "axios";

type Error = AxiosError & {
  response: {
    data: {
      message: string;
    };
  };
};

export const isApiError = (error: unknown): error is Error => {
  if (error instanceof AxiosError) {
    const data = error.response?.data;
    return !isNullOrUndefined(data) && isObject(data) && "message" in data;
  }

  return false;
};
