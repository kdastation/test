import { routes } from "@shared/consts/routes";
import { Coin } from "../types/Coin";
import { api } from "@shared/api";

export type GetCoinsParams = {
  search?: string;
  page?: number;
  limit?: number;
};
export const service = {
  getCoins({ search = "", page = 1, limit = 5 }: GetCoinsParams) {
    return api.request<Coin[]>({
      url: routes.coins,
      params: {
        title_like: search,
        _limit: limit,
        _page: page,
      },
    });
  },
  getCoin(id: number) {
    return api.request<Coin>({
      url: `${routes.coins}/${id}`,
    });
  },
};
