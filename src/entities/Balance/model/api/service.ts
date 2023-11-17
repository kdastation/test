import { routes } from "@shared/consts/routes";
import { Balance } from "../types/Balance";
import { api } from "@shared/api";

export const service = {
  getBalance() {
    return api.request<Balance>({
      url: routes.balance,
    });
  },
};
