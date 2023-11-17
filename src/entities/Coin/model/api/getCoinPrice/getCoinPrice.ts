import { useQuery } from "react-query";
import { service } from "../service";

const keys = {
  root: ["price"],
  query: (id: number) => [...keys.root, id],
};

export const useGetCoinPrice = (id: number) => {
  return useQuery({
    queryKey: keys.query(id),
    queryFn: async () => {
      return await service.getCoinPrice(id);
    },
    select: ({ data }) => data,
  });
};
