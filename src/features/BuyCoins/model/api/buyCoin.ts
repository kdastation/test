import { useMutation } from "react-query";
import { service } from "./service";

type Args = { id: number; amount: number };
export const useBuyCoin = () => {
  return useMutation<void, unknown, Args>(async (args: Args) => {
    await service.buyCoin(args);
  });
};
