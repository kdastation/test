import { useQuery } from "react-query";
import { service } from "../service";

const keys = {
  root: ["coins"],
  query: (id: number) => [...keys.root, id],
};

export const useGetCoin = (id: number) => {
  return useQuery({
    queryKey: keys.query(id),
    queryFn: async () => {
      return await service.getCoin(id);
    },
    select: ({ data }) => data,
  });
};
