import { routes } from "@shared/consts/routes";
import { Coin } from "../types/Coin";
import { Price } from "../types/Price";
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
  getCoinPrice(id: number) {
    return api.request<Price>({
      url: `${routes.price}/${id}`,
    });
  },
};
