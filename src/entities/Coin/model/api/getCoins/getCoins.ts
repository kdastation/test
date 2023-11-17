import { useInfiniteQuery } from "react-query";
import { service, GetCoinsParams } from "../service";

const keys = {
  root: ["coins"],
  query: (query: GetCoinsParams) => [...keys.root, query],
};
export const useGetCoins = ({
  search = "",
  limit = 5,
  page = 1,
}: GetCoinsParams) => {
  return useInfiniteQuery({
    queryKey: keys.query({ search, limit, page }),
    queryFn: async ({ pageParam = 1 }) => {
      const response = await service.getCoins({
        search,
        limit,
        page: pageParam,
      });

      return {
        coins: response.data,
        page: pageParam,
        totalCount: response.headers["x-total-count"]
          ? response.headers["x-total-count"]
          : response.data.length,
      };
    },
    getNextPageParam: (lastPage) => {
      const maxCountPages = Math.ceil(lastPage.totalCount / limit);

      if (lastPage.page + 1 <= maxCountPages) {
        return lastPage.page + 1;
      }

      return null;
    },
  });
};
