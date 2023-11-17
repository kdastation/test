import { routes } from "@shared/consts/routes";
import { api } from "@shared/api";

export const service = {
  buyCoin({ amount }: { amount: number; id: number }) {
    return api.request<void>({
      url: routes.transfer,
      method: "POST",
      data: {
        amount,
      },
    });
  },
};
