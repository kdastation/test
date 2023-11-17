import { useQuery } from "react-query";
import { service } from "../service";

const keys = {
  root: ["balance"],
  query: () => [...keys.root],
};
export const useGetBalance = () => {
  return useQuery({
    queryKey: keys.query(),
    queryFn: service.getBalance,
    select: ({ data }) => data,
  });
};
